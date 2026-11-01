'use strict';
// In-memory room/session store. Swap for Redis (see SCALING in README) when running >1 node.

const crypto = require('crypto');

const MAX_MESSAGES = 200;

function newId(bytes = 8) {
  return crypto.randomBytes(bytes).toString('hex');
}

class Room {
  constructor({ sessionId, hostUserId, videoId, videoService, videoType, serviceDomain, videoDuration, reactionsDisabled }) {
    this.sessionId = sessionId;
    this.hostUserId = hostUserId;
    this.videoId = videoId ?? null;
    this.videoService = videoService ?? null;
    this.videoType = videoType ?? null;
    this.serviceDomain = serviceDomain ?? null;
    this.videoDuration = videoDuration ?? null;
    this.reactionsDisabled = String(Boolean(reactionsDisabled));
    this.createdAt = Date.now();
    // Playback state, matches the client's sessionData fields.
    this.state = 'paused';
    this.lastKnownTime = 0;
    this.lastKnownTimeUpdatedAt = Date.now();
    this.providerOffsets = undefined;
    this.members = new Map(); // userId -> Member
    this.messages = [];
    this.buffering = new Set();
    this.typing = new Set();
    this.watchingAds = new Set();
  }

  userList() {
    return [...this.members.values()].map((m) => ({
      userId: m.userId,
      socketConnectionId: m.userId,
      permId: m.permId,
      userSettings: m.userSettings,
      isHost: m.userId === this.hostUserId,
      joinedAt: m.joinedAt,
    }));
  }

  pushMessage(msg) {
    this.messages.push(msg);
    if (this.messages.length > MAX_MESSAGES) this.messages.shift();
  }

  snapshot() {
    return {
      sessionId: this.sessionId,
      state: this.state,
      lastKnownTime: this.lastKnownTime,
      lastKnownTimeUpdatedAt: this.lastKnownTimeUpdatedAt,
      providerOffsets: this.providerOffsets,
      videoId: this.videoId,
      videoService: this.videoService,
      videoType: this.videoType,
      serviceDomain: this.serviceDomain,
      videoDuration: this.videoDuration,
      reactionsDisabled: this.reactionsDisabled,
      messages: this.messages,
      userList: this.userList(),
      serverTime: Date.now(),
    };
  }
}

class RoomStore {
  constructor() {
    this.rooms = new Map();
  }
  create(opts) {
    let sessionId;
    do sessionId = newId(8); while (this.rooms.has(sessionId));
    const room = new Room({ ...opts, sessionId });
    this.rooms.set(sessionId, room);
    return room;
  }
  get(id) {
    return this.rooms.get(id);
  }
  delete(id) {
    this.rooms.delete(id);
  }
  stats() {
    let users = 0;
    for (const r of this.rooms.values()) users += r.members.size;
    return { rooms: this.rooms.size, users };
  }
}

module.exports = { RoomStore, Room, newId };
