/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Audioling API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
    InfiniteData,
    MutationFunction,
    QueryFunction,
    QueryKey,
    UseMutationOptions,
    UseMutationResult,
    UseSuspenseInfiniteQueryOptions,
    UseSuspenseInfiniteQueryResult,
    UseSuspenseQueryOptions,
    UseSuspenseQueryResult,
} from '@tanstack/react-query';
import type {
    DeleteApiLibraryIdTracksIdFavorite204,
    DeleteApiLibraryIdTracksIdFavorite401,
    DeleteApiLibraryIdTracksIdFavorite403,
    DeleteApiLibraryIdTracksIdFavorite404,
    DeleteApiLibraryIdTracksIdFavorite500,
    GetApiLibraryIdTracks200,
    GetApiLibraryIdTracks401,
    GetApiLibraryIdTracks403,
    GetApiLibraryIdTracks422,
    GetApiLibraryIdTracks500,
    GetApiLibraryIdTracksId200,
    GetApiLibraryIdTracksId401,
    GetApiLibraryIdTracksId403,
    GetApiLibraryIdTracksId404,
    GetApiLibraryIdTracksId500,
    GetApiLibraryIdTracksParams,
    PostApiLibraryIdTracksIdFavorite204,
    PostApiLibraryIdTracksIdFavorite401,
    PostApiLibraryIdTracksIdFavorite403,
    PostApiLibraryIdTracksIdFavorite404,
    PostApiLibraryIdTracksIdFavorite500,
} from '../audioling-openapi-client.schemas.ts';
import { apiInstance } from '../../api-instance.ts';
import type { ErrorType } from '../../api-instance.ts';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get all tracks
 */
export const getApiLibraryIdTracks = (
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: SecondParameter<typeof apiInstance>,
    signal?: AbortSignal,
) => {
    return apiInstance<GetApiLibraryIdTracks200>(
        { url: `/api/${libraryId}/tracks`, method: 'GET', params, signal },
        options,
    );
};

export const getGetApiLibraryIdTracksQueryKey = (
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
) => {
    return [`/api/${libraryId}/tracks`, ...(params ? [params] : [])] as const;
};

export const getGetApiLibraryIdTracksSuspenseQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdTracksQueryKey(libraryId, params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdTracks>>> = ({
        signal,
    }) => getApiLibraryIdTracks(libraryId, params, requestOptions, signal);

    return { queryKey, queryFn, enabled: !!libraryId, ...queryOptions } as UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdTracksSuspenseQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdTracks>>
>;
export type GetApiLibraryIdTracksSuspenseQueryError = ErrorType<
    | GetApiLibraryIdTracks401
    | GetApiLibraryIdTracks403
    | GetApiLibraryIdTracks422
    | GetApiLibraryIdTracks500
>;

export function useGetApiLibraryIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options: {
        query: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get all tracks
 */

export function useGetApiLibraryIdTracksSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdTracksSuspenseQueryOptions(libraryId, params, options);

    const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
        queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getGetApiLibraryIdTracksSuspenseInfiniteQueryOptions = <
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        GetApiLibraryIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                QueryKey,
                GetApiLibraryIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdTracksQueryKey(libraryId, params);

    const queryFn: QueryFunction<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        QueryKey,
        GetApiLibraryIdTracksParams['offset']
    > = ({ signal, pageParam }) =>
        getApiLibraryIdTracks(
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
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        QueryKey,
        GetApiLibraryIdTracksParams['offset']
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdTracksSuspenseInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdTracks>>
>;
export type GetApiLibraryIdTracksSuspenseInfiniteQueryError = ErrorType<
    | GetApiLibraryIdTracks401
    | GetApiLibraryIdTracks403
    | GetApiLibraryIdTracks422
    | GetApiLibraryIdTracks500
>;

export function useGetApiLibraryIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        GetApiLibraryIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options: {
        query: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                QueryKey,
                GetApiLibraryIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        GetApiLibraryIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                QueryKey,
                GetApiLibraryIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        GetApiLibraryIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                QueryKey,
                GetApiLibraryIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get all tracks
 */

export function useGetApiLibraryIdTracksSuspenseInfinite<
    TData = InfiniteData<
        Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
        GetApiLibraryIdTracksParams['offset']
    >,
    TError = ErrorType<
        | GetApiLibraryIdTracks401
        | GetApiLibraryIdTracks403
        | GetApiLibraryIdTracks422
        | GetApiLibraryIdTracks500
    >,
>(
    libraryId: string,
    params: GetApiLibraryIdTracksParams,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                TError,
                TData,
                Awaited<ReturnType<typeof getApiLibraryIdTracks>>,
                QueryKey,
                GetApiLibraryIdTracksParams['offset']
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdTracksSuspenseInfiniteQueryOptions(
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
 * @summary Get track by id
 */
export const getApiLibraryIdTracksId = (
    libraryId: string,
    id: string,
    options?: SecondParameter<typeof apiInstance>,
    signal?: AbortSignal,
) => {
    return apiInstance<GetApiLibraryIdTracksId200>(
        { url: `/api/${libraryId}/tracks/${id}`, method: 'GET', signal },
        options,
    );
};

export const getGetApiLibraryIdTracksIdQueryKey = (libraryId: string, id: string) => {
    return [`/api/${libraryId}/tracks/${id}`] as const;
};

export const getGetApiLibraryIdTracksIdSuspenseQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdTracksIdQueryKey(libraryId, id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>> = ({
        signal,
    }) => getApiLibraryIdTracksId(libraryId, id, requestOptions, signal);

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdTracksIdSuspenseQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdTracksId>>
>;
export type GetApiLibraryIdTracksIdSuspenseQueryError = ErrorType<
    | GetApiLibraryIdTracksId401
    | GetApiLibraryIdTracksId403
    | GetApiLibraryIdTracksId404
    | GetApiLibraryIdTracksId500
>;

export function useGetApiLibraryIdTracksIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options: {
        query: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get track by id
 */

export function useGetApiLibraryIdTracksIdSuspense<
    TData = Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdTracksIdSuspenseQueryOptions(libraryId, id, options);

    const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
        queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getGetApiLibraryIdTracksIdSuspenseInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibraryIdTracksIdQueryKey(libraryId, id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>> = ({
        signal,
    }) => getApiLibraryIdTracksId(libraryId, id, requestOptions, signal);

    return {
        queryKey,
        queryFn,
        enabled: !!(libraryId && id),
        ...queryOptions,
    } as UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibraryIdTracksIdSuspenseInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibraryIdTracksId>>
>;
export type GetApiLibraryIdTracksIdSuspenseInfiniteQueryError = ErrorType<
    | GetApiLibraryIdTracksId401
    | GetApiLibraryIdTracksId403
    | GetApiLibraryIdTracksId404
    | GetApiLibraryIdTracksId500
>;

export function useGetApiLibraryIdTracksIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options: {
        query: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraryIdTracksIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get track by id
 */

export function useGetApiLibraryIdTracksIdSuspenseInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof getApiLibraryIdTracksId>>>,
    TError = ErrorType<
        | GetApiLibraryIdTracksId401
        | GetApiLibraryIdTracksId403
        | GetApiLibraryIdTracksId404
        | GetApiLibraryIdTracksId500
    >,
>(
    libraryId: string,
    id: string,
    options?: {
        query?: Partial<
            UseSuspenseInfiniteQueryOptions<
                Awaited<ReturnType<typeof getApiLibraryIdTracksId>>,
                TError,
                TData
            >
        >;
        request?: SecondParameter<typeof apiInstance>;
    },
): UseSuspenseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibraryIdTracksIdSuspenseInfiniteQueryOptions(
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
 * @summary Add track favorite by id
 */
export const postApiLibraryIdTracksIdFavorite = (
    libraryId: string,
    id: string,
    options?: SecondParameter<typeof apiInstance>,
) => {
    return apiInstance<PostApiLibraryIdTracksIdFavorite204>(
        { url: `/api/${libraryId}/tracks/${id}/favorite`, method: 'POST' },
        options,
    );
};

export const getPostApiLibraryIdTracksIdFavoriteMutationOptions = <
    TError = ErrorType<
        | PostApiLibraryIdTracksIdFavorite401
        | PostApiLibraryIdTracksIdFavorite403
        | PostApiLibraryIdTracksIdFavorite404
        | PostApiLibraryIdTracksIdFavorite500
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>,
        TError,
        { libraryId: string; id: string },
        TContext
    >;
    request?: SecondParameter<typeof apiInstance>;
}): UseMutationOptions<
    Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>,
    TError,
    { libraryId: string; id: string },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>,
        { libraryId: string; id: string }
    > = (props) => {
        const { libraryId, id } = props ?? {};

        return postApiLibraryIdTracksIdFavorite(libraryId, id, requestOptions);
    };

    return { mutationFn, ...mutationOptions };
};

export type PostApiLibraryIdTracksIdFavoriteMutationResult = NonNullable<
    Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>
>;

export type PostApiLibraryIdTracksIdFavoriteMutationError = ErrorType<
    | PostApiLibraryIdTracksIdFavorite401
    | PostApiLibraryIdTracksIdFavorite403
    | PostApiLibraryIdTracksIdFavorite404
    | PostApiLibraryIdTracksIdFavorite500
>;

/**
 * @summary Add track favorite by id
 */
export const usePostApiLibraryIdTracksIdFavorite = <
    TError = ErrorType<
        | PostApiLibraryIdTracksIdFavorite401
        | PostApiLibraryIdTracksIdFavorite403
        | PostApiLibraryIdTracksIdFavorite404
        | PostApiLibraryIdTracksIdFavorite500
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>,
        TError,
        { libraryId: string; id: string },
        TContext
    >;
    request?: SecondParameter<typeof apiInstance>;
}): UseMutationResult<
    Awaited<ReturnType<typeof postApiLibraryIdTracksIdFavorite>>,
    TError,
    { libraryId: string; id: string },
    TContext
> => {
    const mutationOptions = getPostApiLibraryIdTracksIdFavoriteMutationOptions(options);

    return useMutation(mutationOptions);
};
/**
 * @summary Remove track favorite by id
 */
export const deleteApiLibraryIdTracksIdFavorite = (
    libraryId: string,
    id: string,
    options?: SecondParameter<typeof apiInstance>,
) => {
    return apiInstance<DeleteApiLibraryIdTracksIdFavorite204>(
        { url: `/api/${libraryId}/tracks/${id}/favorite`, method: 'DELETE' },
        options,
    );
};

export const getDeleteApiLibraryIdTracksIdFavoriteMutationOptions = <
    TError = ErrorType<
        | DeleteApiLibraryIdTracksIdFavorite401
        | DeleteApiLibraryIdTracksIdFavorite403
        | DeleteApiLibraryIdTracksIdFavorite404
        | DeleteApiLibraryIdTracksIdFavorite500
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>,
        TError,
        { libraryId: string; id: string },
        TContext
    >;
    request?: SecondParameter<typeof apiInstance>;
}): UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>,
    TError,
    { libraryId: string; id: string },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>,
        { libraryId: string; id: string }
    > = (props) => {
        const { libraryId, id } = props ?? {};

        return deleteApiLibraryIdTracksIdFavorite(libraryId, id, requestOptions);
    };

    return { mutationFn, ...mutationOptions };
};

export type DeleteApiLibraryIdTracksIdFavoriteMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>
>;

export type DeleteApiLibraryIdTracksIdFavoriteMutationError = ErrorType<
    | DeleteApiLibraryIdTracksIdFavorite401
    | DeleteApiLibraryIdTracksIdFavorite403
    | DeleteApiLibraryIdTracksIdFavorite404
    | DeleteApiLibraryIdTracksIdFavorite500
>;

/**
 * @summary Remove track favorite by id
 */
export const useDeleteApiLibraryIdTracksIdFavorite = <
    TError = ErrorType<
        | DeleteApiLibraryIdTracksIdFavorite401
        | DeleteApiLibraryIdTracksIdFavorite403
        | DeleteApiLibraryIdTracksIdFavorite404
        | DeleteApiLibraryIdTracksIdFavorite500
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>,
        TError,
        { libraryId: string; id: string },
        TContext
    >;
    request?: SecondParameter<typeof apiInstance>;
}): UseMutationResult<
    Awaited<ReturnType<typeof deleteApiLibraryIdTracksIdFavorite>>,
    TError,
    { libraryId: string; id: string },
    TContext
> => {
    const mutationOptions = getDeleteApiLibraryIdTracksIdFavoriteMutationOptions(options);

    return useMutation(mutationOptions);
};
