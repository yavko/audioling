import { useEffect, useRef } from 'react';
import type { LibraryItemType } from '@repo/shared-types';
import { createCallable } from 'react-call';
import { useParams } from 'react-router-dom';
import type { TrackItem } from '@/api/api-types.ts';
import {
    addToQueueByData,
    addToQueueByFetch,
    usePlayerActions,
} from '@/features/player/stores/player-store.tsx';
import type { AddToQueueType } from '@/features/player/stores/player-store.tsx';
import { queryClient } from '@/lib/react-query.ts';

interface PlayerControllerProps {
    cmd: PlayerCommand;
}

export const PlayerController = createCallable<PlayerControllerProps, void>(({ call, cmd }) => {
    const { libraryId } = useParams() as { libraryId: string };
    const {
        mediaPause,
        mediaPlay,
        mediaNext,
        mediaPrevious,
        mediaStepBackward,
        mediaStepForward,
        mediaTogglePlayPause,
        clearQueue,
    } = usePlayerActions();
    usePlayerActions();

    const isExecuted = useRef<boolean>(false);

    useEffect(() => {
        if (isExecuted.current) {
            return;
        }

        isExecuted.current = true;

        const action = Object.keys(cmd)[0] as keyof PlayerCommand;

        switch (action) {
            case 'addToQueueByData': {
                const command = cmd as AddToQueueByData;
                addToQueueByData(command.addToQueueByData.type, command.addToQueueByData.data);
                break;
            }
            case 'addToQueueByFetch': {
                const command = cmd as AddToQueueByFetch;

                addToQueueByFetch(
                    queryClient,
                    libraryId,
                    command.addToQueueByFetch.type,
                    command.addToQueueByFetch,
                );

                break;
            }
            case 'clearQueue': {
                clearQueue();
                break;
            }
            case 'mediaPause': {
                mediaPause();
                break;
            }
            case 'mediaPlay': {
                mediaPlay();
                break;
            }
            case 'mediaNext': {
                mediaNext();
                break;
            }
            case 'mediaPrevious': {
                mediaPrevious();
                break;
            }
            case 'mediaStepBackward': {
                mediaStepBackward();
                break;
            }
            case 'mediaStepForward': {
                mediaStepForward();
                break;
            }
            case 'mediaTogglePlayPause': {
                mediaTogglePlayPause();
                break;
            }
        }

        call.end();
    }, [
        cmd,
        call,
        mediaNext,
        mediaPause,
        mediaPlay,
        mediaPrevious,
        mediaStepBackward,
        mediaStepForward,
        mediaTogglePlayPause,
        clearQueue,
        libraryId,
    ]);

    return null;
});

export type PlayerCommand =
    | AddToQueueByData
    | AddToQueueByFetch
    | ClearQueue
    | MediaPause
    | MediaPlay
    | MediaNext
    | MediaPrevious
    | MediaStepBackward
    | MediaStepForward
    | MediaTogglePlayPause;

type AddToQueueByFetch = {
    addToQueueByFetch: {
        id: string;
        itemType: LibraryItemType;
        type: AddToQueueType;
    };
};

type AddToQueueByData = {
    addToQueueByData: {
        data: TrackItem[];
        type: AddToQueueType;
    };
};

type MediaPause = {
    mediaPause: null;
};

type MediaPlay = {
    mediaPlay: null;
};

type MediaNext = {
    mediaNext: null;
};

type MediaPrevious = {
    mediaPrevious: null;
};

type MediaStepBackward = {
    mediaStepBackward: null;
};

type MediaStepForward = {
    mediaStepForward: null;
};

type MediaTogglePlayPause = {
    mediaTogglePlayPause: null;
};

type ClearQueue = {
    clearQueue: null;
};