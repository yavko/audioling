import { useEffect } from 'react';
import type { PlayQueueItem } from '@/api/api-types.ts';
import { createPlayerEvents } from '@/features/player/audio-player/listener/player-events.tsx';
import type { PlayerStatus, QueueData } from '@/features/player/stores/player-store.tsx';

export interface PlayerEvents {
    onCurrentTrackChange?: (
        track: PlayQueueItem | undefined,
        prevTrack: PlayQueueItem | undefined,
    ) => void;
    onPlayerProgress?: (timestamp: number, prevTimestamp: number) => void;
    onPlayerQueueChange?: (queue: QueueData, prevQueue: QueueData) => void;
    onPlayerSeek?: (timestamp: number, prevTimestamp: number) => void;
    onPlayerStatus?: (status: PlayerStatus, prevStatus: PlayerStatus) => void;
    onPlayerVolume?: (volume: number, prevVolume: number) => void;
}

export function usePlayerEvents(callbacks: PlayerEvents, deps: React.DependencyList) {
    useEffect(() => {
        const engine = createPlayerEvents(callbacks);

        return () => {
            engine.cleanup();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps]);
}