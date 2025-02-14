import { z } from '@hono/zod-openapi';
import {
    CountResponseSchema,
    EmptyResponseSchema,
    schemaResponse,
} from '@/controllers/shared-api-types.js';
import {
    trackDetailResponseSchema,
    trackListRequestSchema,
    trackListResponseSchema,
    trackQueryRequestSchema,
    trackQueryStatusResponseSchema,
} from '@/controllers/track/track-api-types.js';

export const trackApiSchema = {
    '/': {
        get: {
            request: {
                params: z.object({ libraryId: z.string() }),
                query: trackListRequestSchema,
            },
            responses: schemaResponse(
                {
                    description: 'Get tracks',
                    schema: trackListResponseSchema,
                    status: 200,
                },
                [401, 403, 422, 500],
            ),
            security: [{ Bearer: [] }],
        },
    },
    '/count': {
        get: {
            request: {
                params: z.object({ libraryId: z.string() }),
                query: trackListRequestSchema.omit({ limit: true, offset: true }),
            },
            responses: schemaResponse(
                { description: 'Get tracks count', schema: CountResponseSchema, status: 200 },
                [401, 403, 422, 500],
            ),
        },
    },
    '/count/invalidate': {
        post: {
            request: {
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                { description: 'Invalidate track count', schema: EmptyResponseSchema, status: 204 },
                [401, 403, 422, 500],
            ),
        },
    },
    '/favorite': {
        post: {
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: z.object({ ids: z.array(z.string()) }),
                        },
                    },
                },
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                { description: 'Add track favorites', schema: EmptyResponseSchema, status: 204 },
                [401, 403, 422, 500],
            ),
            security: [{ Bearer: [] }],
        },
    },
    '/query': {
        get: {
            request: {
                params: z.object({ libraryId: z.string() }),
                query: trackQueryRequestSchema,
            },
            responses: schemaResponse(
                {
                    description: 'Get tracks query',
                    schema: trackListResponseSchema,
                    status: 200,
                },
                [401, 403, 422, 500],
            ),
            security: [{ Bearer: [] }],
        },
    },
    '/query/index': {
        delete: {
            request: {
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Abort track list indexing',
                    schema: EmptyResponseSchema,
                    status: 204,
                },
                [401, 403, 404, 500],
            ),
        },
        post: {
            request: {
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Start track list indexing',
                    schema: EmptyResponseSchema,
                    status: 204,
                },
                [401, 403, 422, 500],
            ),
        },
    },
    '/query/status': {
        get: {
            request: {
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Get track query status',
                    schema: trackQueryStatusResponseSchema,
                    status: 200,
                },
                [401, 403, 422, 500],
            ),
        },
    },
    '/query/{queryId}': {
        delete: {
            request: {
                params: z.object({ libraryId: z.string(), queryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Delete and abort a track query',
                    schema: EmptyResponseSchema,
                    status: 204,
                },
                [401, 403, 404, 500],
            ),
        },
    },
    '/unfavorite': {
        post: {
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: z.object({ ids: z.array(z.string()) }),
                        },
                    },
                },
                params: z.object({ libraryId: z.string() }),
            },
            responses: schemaResponse(
                { description: 'Remove track favorites', schema: EmptyResponseSchema, status: 204 },
                [401, 403, 422, 500],
            ),
            security: [{ Bearer: [] }],
        },
    },
    '/{id}': {
        get: {
            request: {
                params: z.object({ id: z.string(), libraryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Get track by id',
                    schema: trackDetailResponseSchema,
                    status: 200,
                },
                [401, 403, 404, 500],
            ),
            security: [{ Bearer: [] }],
        },
    },
    '/{id}/stream': {
        get: {
            request: {
                params: z.object({ id: z.string(), libraryId: z.string() }),
            },
            responses: schemaResponse(
                {
                    description: 'Get track stream by id',
                    schema: EmptyResponseSchema,
                    status: 200,
                },
                [401, 403, 404, 500],
            ),
        },
    },
};
