// ---------------------------------------------------------------------------
// Firebase config for the Party Sync web client.
//
// Paste YOUR OWN Firebase web app config below. Get it from:
//   console.firebase.google.com -> (your project) -> Project settings
//   -> General -> "Your apps" -> Web app -> SDK setup and configuration
//   -> "Config". Copy the object into FIREBASE_CONFIG.
//
// Then enable Email/Password sign-in:
//   Firebase console -> Authentication -> Sign-in method -> Email/Password -> Enable.
//
// Until this is filled in with real values, the client runs in GUEST mode:
// parties still work anonymously (identity comes from the server-issued userId),
// and the login UI shows a short "not configured" note. Firebase web API keys
// are public identifiers, not secrets, so it is fine to ship this file.
// ---------------------------------------------------------------------------

window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_FIREBASE_WEB_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// ---------------------------------------------------------------------------
// Auth glue. Exposes window.PartyAuth used by client.js. No edits needed below.
// ---------------------------------------------------------------------------
(() => {
  const cfg = window.FIREBASE_CONFIG || {};
  const configured =
    !!cfg.apiKey &&
    !String(cfg.apiKey).startsWith("PASTE_") &&
    !!cfg.authDomain &&
    !String(cfg.authDomain).startsWith("PASTE_");

  const tokenListeners = new Set();
  const userListeners = new Set();
  let currentToken = null;
  let currentUser = null;
  let auth = null;

  const notifyToken = () => tokenListeners.forEach((fn) => fn(currentToken, currentUser));
  const notifyUser = () => userListeners.forEach((fn) => fn(currentUser));

  const api = {
    isConfigured: () => configured,
    // token may be null (guest). cb is called immediately with the current value
    // and again on every sign-in / sign-out / hourly token refresh.
    onToken(cb) { tokenListeners.add(cb); cb(currentToken, currentUser); return () => tokenListeners.delete(cb); },
    onUser(cb) { userListeners.add(cb); cb(currentUser); return () => userListeners.delete(cb); },
    getToken: () => currentToken,
    getUser: () => currentUser,
    async signUp(email, password) {
      if (!auth) throw new Error("Firebase not configured");
      await auth.createUserWithEmailAndPassword(email, password);
    },
    async signIn(email, password) {
      if (!auth) throw new Error("Firebase not configured");
      await auth.signInWithEmailAndPassword(email, password);
    },
    async signOut() {
      if (!auth) return;
      await auth.signOut();
    },
  };
  window.PartyAuth = api;

  if (!configured) {
    // Guest mode. Fire the initial (null) token so the client proceeds anonymously.
    queueMicrotask(notifyToken);
    queueMicrotask(notifyUser);
    return;
  }

  // Firebase compat SDK is loaded via <script> tags in index.html before this file.
  if (typeof firebase === "undefined") {
    console.error("[auth] Firebase SDK not loaded; falling back to guest mode.");
    queueMicrotask(notifyToken);
    return;
  }

  firebase.initializeApp(cfg);
  auth = firebase.auth();

  // Fires on sign-in, sign-out, and automatic hourly ID-token refresh.
  auth.onIdTokenChanged(async (user) => {
    currentUser = user || null;
    try {
      currentToken = user ? await user.getIdToken() : null;
    } catch (e) {
      console.error("[auth] getIdToken failed", e);
      currentToken = null;
    }
    notifyUser();
    notifyToken();
  });
})();
