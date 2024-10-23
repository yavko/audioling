/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Audioling API
 * OpenAPI spec version: 1.0.0
 */
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
    InfiniteData,
    QueryFunction,
    QueryKey,
    UseSuspenseInfiniteQueryOptions,
    UseSuspenseInfiniteQueryResult,
    UseSuspenseQueryOptions,
    UseSuspenseQueryResult,
} from '@tanstack/react-query';
import type {
    GetApiLibraryIdPlaylists200,
    GetApiLibraryIdPlaylists401,
    GetApiLibraryIdPlaylists403,
    GetApiLibraryIdPlaylists422,
    GetApiLibraryIdPlaylists500,
    GetApiLibraryIdPlaylistsId200,
    GetApiLibraryIdPlaylistsId401,
    GetApiLibraryIdPlaylistsId403,
    GetApiLibraryIdPlaylistsId404,
    GetApiLibraryIdPlaylistsId500,
    GetApiLibraryIdPlaylistsIdTracks200,
    GetApiLibraryIdPlaylistsIdTracks401,
    GetApiLibraryIdPlaylistsIdTracks403,
    GetApiLibraryIdPlaylistsIdTracks404,
    GetApiLibraryIdPlaylistsIdTracks500,
    GetApiLibraryIdPlaylistsIdTracksParams,
    GetApiLibraryIdPlaylistsParams,
} from '../audioling-openapi-client.schemas.ts';
import { apiInstance } from '../../api-instance.ts';
import type { ErrorType } from '../../api-instance.ts';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get all playlists
 */
export const getApiLibraryIdPlaylists = (
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: SecondParameter<typeof apiInstance>,
    signal?: AbortSignal,
) => {
    return apiInstance<GetApiLibraryIdPlaylists200>(
        { url: `/api/${libraryId}/playlists`, method: 'GET', params, signal },
        options,
    );
};

export const getGetApiLibraryIdPlaylistsQueryKey = (
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
) => {
    return [`/api/${libraryId}/playlists`, ...(params ? [params] : [])] as const;
};

export const getGetApiLibraryIdPlaylistsSuspenseQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ?? getGetApiLibraryIdPlaylistsQueryKey(libraryId, params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>> = ({
        signal,
    }) => getApiLibraryIdPlaylists(libraryId, params, requestOptions, signal);

    return { queryKey, queryFn, enabled: !!libraryId, ...queryOptions } as UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsSuspenseQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>
>;
export type GetApiLibraryIdPlaylistsSuspenseQueryError = ErrorType<
    | GetApiLibraryIdPlaylists401
    | GetApiLibraryIdPlaylists403
    | GetApiLibraryIdPlaylists422
    | GetApiLibraryIdPlaylists500
>;

export function useGetApiLibraryIdPlaylistsSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options: {
        query: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get all playlists
 */

export function useGetApiLibraryIdPlaylistsSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsSuspenseQueryOptions(
        libraryId,
        params,
        options,
    );

    const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
        queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getGetApiLibraryIdPlaylistsSuspenseInfiniteQueryOptions = <
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        GetApiLibraryIdPlaylistsParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                QueryKey,
                GetApiLibraryIdPlaylistsParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ?? getGetApiLibraryIdPlaylistsQueryKey(libraryId, params);

    const queryFn: QueryFunction<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        QueryKey,
        GetApiLibraryIdPlaylistsParams['offset']
    > = ({ signal, pageParam }) =>
        getApiLibraryIdPlaylists(
            libraryId,
            { ...params, offset: pageParam || params?.['offset'] },
            requestOptions,
            signal,
        );

    return {
        queryKey,
        queryFn,
        enabled: !!libraryId,
        ...queryOptions,
    } as UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        QueryKey,
        GetApiLibraryIdPlaylistsParams['offset']
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsSuspenseInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>
>;
export type GetApiLibraryIdPlaylistsSuspenseInfiniteQueryError = ErrorType<
    | GetApiLibraryIdPlaylists401
    | GetApiLibraryIdPlaylists403
    | GetApiLibraryIdPlaylists422
    | GetApiLibraryIdPlaylists500
>;

export function useGetApiLibraryIdPlaylistsSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        GetApiLibraryIdPlaylistsParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options: {
        query: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                QueryKey,
                GetApiLibraryIdPlaylistsParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        GetApiLibraryIdPlaylistsParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                QueryKey,
                GetApiLibraryIdPlaylistsParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        GetApiLibraryIdPlaylistsParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                QueryKey,
                GetApiLibraryIdPlaylistsParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get all playlists
 */

export function useGetApiLibraryIdPlaylistsSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
        GetApiLibraryIdPlaylistsParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylists401
        | GetApiLibraryIdPlaylists403
        | GetApiLibraryIdPlaylists422
        | GetApiLibraryIdPlaylists500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdPlaylistsParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylists>>,
                QueryKey,
                GetApiLibraryIdPlaylistsParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsSuspenseInfiniteQueryOptions(
        libraryId,
        params,
        options,
    );

    const query = useSuspenseInfiniteQuery(queryOptions) as UseSuspenseInfiniteQueryResult<
        TData,
        TError
    > & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

/**
 * @summary Get playlist by id
 */
export const getApiLibraryIdPlaylistsId = (
    libraryId: string,
    id: string,
    options?: SecondParameter<typeof apiInstance>,
    signal?: AbortSignal,
) => {
    return apiInstance<GetApiLibraryIdPlaylistsId200>(
        { url: `/api/${libraryId}/playlists/${id}`, method: 'GET', signal },
        options,
    );
};

export const getGetApiLibraryIdPlaylistsIdQueryKey = (libraryId: string, id: string) => {
    return [`/api/${libraryId}/playlists/${id}`] as const;
};

export const getGetApiLibraryIdPlaylistsIdSuspenseQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdPlaylistsIdQueryKey(libraryId, id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>> = ({
        signal,
    }) => getApiLibraryIdPlaylistsId(libraryId, id, requestOptions, signal);

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsIdSuspenseQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>
>;
export type GetApiLibraryIdPlaylistsIdSuspenseQueryError = ErrorType<
    | GetApiLibraryIdPlaylistsId401
    | GetApiLibraryIdPlaylistsId403
    | GetApiLibraryIdPlaylistsId404
    | GetApiLibraryIdPlaylistsId500
>;

export function useGetApiLibraryIdPlaylistsIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options: {
        query: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get playlist by id
 */

export function useGetApiLibraryIdPlaylistsIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsIdSuspenseQueryOptions(libraryId, id, options);

    const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
        queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getGetApiLibraryIdPlaylistsIdSuspenseInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdPlaylistsIdQueryKey(libraryId, id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>> = ({
        signal,
    }) => getApiLibraryIdPlaylistsId(libraryId, id, requestOptions, signal);

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsIdSuspenseInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>
>;
export type GetApiLibraryIdPlaylistsIdSuspenseInfiniteQueryError = ErrorType<
    | GetApiLibraryIdPlaylistsId401
    | GetApiLibraryIdPlaylistsId403
    | GetApiLibraryIdPlaylistsId404
    | GetApiLibraryIdPlaylistsId500
>;

export function useGetApiLibraryIdPlaylistsIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options: {
        query: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get playlist by id
 */

export function useGetApiLibraryIdPlaylistsIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsId401
        | GetApiLibraryIdPlaylistsId403
        | GetApiLibraryIdPlaylistsId404
        | GetApiLibraryIdPlaylistsId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsIdSuspenseInfiniteQueryOptions(
        libraryId,
        id,
        options,
    );

    const query = useSuspenseInfiniteQuery(queryOptions) as UseSuspenseInfiniteQueryResult<
        TData,
        TError
    > & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

/**
 * @summary Get playlist tracks
 */
export const getApiLibraryIdPlaylistsIdTracks = (
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: SecondParameter<typeof apiInstance>,
    signal?: AbortSignal,
) => {
    return apiInstance<GetApiLibraryIdPlaylistsIdTracks200>(
        { url: `/api/${libraryId}/playlists/${id}/tracks`, method: 'GET', params, signal },
        options,
    );
};

export const getGetApiLibraryIdPlaylistsIdTracksQueryKey = (
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
) => {
    return [`/api/${libraryId}/playlists/${id}/tracks`, ...(params ? [params] : [])] as const;
};

export const getGetApiLibraryIdPlaylistsIdTracksSuspenseQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ??
        getGetApiLibraryIdPlaylistsIdTracksQueryKey(libraryId, id, params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>> = ({
        signal,
    }) => getApiLibraryIdPlaylistsIdTracks(libraryId, id, params, requestOptions, signal);

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsIdTracksSuspenseQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>
>;
export type GetApiLibraryIdPlaylistsIdTracksSuspenseQueryError = ErrorType<
    | GetApiLibraryIdPlaylistsIdTracks401
    | GetApiLibraryIdPlaylistsIdTracks403
    | GetApiLibraryIdPlaylistsIdTracks404
    | GetApiLibraryIdPlaylistsIdTracks500
>;

export function useGetApiLibraryIdPlaylistsIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options: {
        query: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get playlist tracks
 */

export function useGetApiLibraryIdPlaylistsIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsIdTracksSuspenseQueryOptions(
        libraryId,
        id,
        params,
        options,
    );

    const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
        queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getGetApiLibraryIdPlaylistsIdTracksSuspenseInfiniteQueryOptions = <
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                QueryKey,
                GetApiLibraryIdPlaylistsIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ??
        getGetApiLibraryIdPlaylistsIdTracksQueryKey(libraryId, id, params);

    const queryFn: QueryFunction<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        QueryKey,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    > = ({ signal, pageParam }) =>
        getApiLibraryIdPlaylistsIdTracks(
            libraryId,
            id,
            { ...params, offset: pageParam || params?.['offset'] },
            requestOptions,
            signal,
        );

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        QueryKey,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdPlaylistsIdTracksSuspenseInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>
>;
export type GetApiLibraryIdPlaylistsIdTracksSuspenseInfiniteQueryError = ErrorType<
    | GetApiLibraryIdPlaylistsIdTracks401
    | GetApiLibraryIdPlaylistsIdTracks403
    | GetApiLibraryIdPlaylistsIdTracks404
    | GetApiLibraryIdPlaylistsIdTracks500
>;

export function useGetApiLibraryIdPlaylistsIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options: {
        query: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                QueryKey,
                GetApiLibraryIdPlaylistsIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                QueryKey,
                GetApiLibraryIdPlaylistsIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdPlaylistsIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                QueryKey,
                GetApiLibraryIdPlaylistsIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get playlist tracks
 */

export function useGetApiLibraryIdPlaylistsIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
        GetApiLibraryIdPlaylistsIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdPlaylistsIdTracks401
        | GetApiLibraryIdPlaylistsIdTracks403
        | GetApiLibraryIdPlaylistsIdTracks404
        | GetApiLibraryIdPlaylistsIdTracks500
    >,
>(
    libraryId: string,
    id: string,
    params: GetApiLibraryIdPlaylistsIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdPlaylistsIdTracks>>,
                QueryKey,
                GetApiLibraryIdPlaylistsIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdPlaylistsIdTracksSuspenseInfiniteQueryOptions(
        libraryId,
        id,
        params,
        options,
    );

    const query = useSuspenseInfiniteQuery(queryOptions) as UseSuspenseInfiniteQueryResult<
        TData,
        TError
    > & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}
