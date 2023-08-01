import type { Speaker } from '../../src'

export const speaker: Speaker = {
  id: '00000000-0000-0000-0000-000000000000',
  type: 'speaker',
  deviceType: 'speaker',
  createdAt: '2000-01-01T00:00:00.000Z',
  isReachable: false,
  lastSeen: '2000-01-01T00:00:00.000Z',
  attributes: {
    customName: 'Custom name',
    model: 'SYMFONISK Bookshelf S21',
    manufacturer: 'Sonos, Inc.',
    firmwareVersion: '73.0-42060',
    hardwareVersion: '1.20.3.3-2.0',
    serialNumber: '00000000-0000-0000-0000-000000000000',
    productCode: 'S21',
    identifyStarted: '2000-01-01T00:00:00.000Z',
    identifyPeriod: 0,
    playback: 'playbackIdle',
    playbackLastChangedTimestamp: '2000-01-01T00:00:00.000Z',
    playbackAudio: {
      serviceType: 'sonos',
      providerType: 'Spotify',
      playItem: {
        id: '00000000-0000-0000-0000-000000000000',
        title: 'title',
        artist: 'artist',
        album: 'album',
        imageURL: 'imageURL',
        duration: 262000,
      },
      nextPlayItem: {
        title: 'title',
        artist: 'artist',
        album: 'album',
      },
    },
    playbackPosition: {
      position: 0,
      timestamp: '2000-01-01T00:00:00.000Z',
    },
    playbackAvailableActions: {
      crossfade: true,
      pause: false,
      repeat: ['off', 'playItem', 'playlist'],
      seek: false,
      shuffle: true,
      playbackNext: false,
      playbackPrev: false,
    },
    playbackModes: {
      crossfade: false,
      repeat: 'off',
      shuffle: false,
    },
    volume: 35,
    isMuted: false,
    audioGroup: '00000000-0000-0000-0000-000000000000',
  },
  capabilities: {
    canSend: [],
    canReceive: ['playback', 'playbackAudio', 'volume', 'isMuted'],
  },
  room: {
    id: '00000000-0000-0000-0000-000000000000',
    name: 'Room',
    color: 'ikea_green_no_65',
    icon: 'rooms_arm_chair',
  },
  deviceSet: [],
  remoteLinks: [],
  isHidden: false,
}