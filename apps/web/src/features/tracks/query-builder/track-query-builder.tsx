import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import type {
    QueryBuilderCondition,
    QueryBuilderField,
    QueryBuilderFields,
    QueryBuilderGroup,
    QueryBuilderOperator,
    QueryFilter,
} from '@/features/ui/query-builder/query-builder.tsx';
import { QueryBuilder } from '@/features/ui/query-builder/query-builder.tsx';

const trackSortFields = [
    { label: 'Album', type: 'text', value: 'albumId' },
    { label: 'Album Artist', type: 'text', value: 'displayAlbumArtist' },
    { label: 'Artist', type: 'text', value: 'artistId' },
    { label: 'Bit Rate', type: 'number', value: 'bitRate' },
    { label: 'BPM', type: 'number', value: 'bpm' },
    { label: 'Comment', type: 'text', value: 'comment' },
    { label: 'Date Added', type: 'date', value: 'createdDate' },
    { label: 'Date Favorited', type: 'date', value: 'userFavoriteDate' },
    { label: 'Date Last Played', type: 'date', value: 'userLastPlayedDate' },
    { label: 'Duration', type: 'number', value: 'duration' },
    { label: 'File Name', type: 'text', value: 'fileName' },
    { label: 'File Path', type: 'text', value: 'filePath' },
    { label: 'File Size', type: 'number', value: 'fileSize' },
    { label: 'ID', type: 'text', value: 'id' },
    { label: 'Name', type: 'text', value: 'name' },
    { label: 'Random', type: 'text', value: 'random' },
    { label: 'Release Year', type: 'number', value: 'releaseYear' },
    { label: 'Sort Name', type: 'text', value: 'sortName' },
    { label: 'Track Number', type: 'number', value: 'trackNumber' },
    { label: 'Play Count', type: 'number', value: 'userPlayCount' },
    { label: 'Rating', type: 'number', value: 'userRating' },
];

export const trackQueryFields = [
    { label: 'Album', type: 'albumSelect', value: 'albumId' },
    { label: 'Album Artist', type: 'albumArtistSelect', value: 'albumArtists.id' },
    { label: 'Album Artist Name', type: 'text', value: 'albumArtists.name' },
    { label: 'Album Name', type: 'text', value: 'album' },
    { label: 'Artist', type: 'artistSelect', value: 'artists.id' },
    { label: 'Artist Name', type: 'text', value: 'artists.name' },
    { label: 'Bit Depth', type: 'number', value: 'bitDepth' },
    { label: 'Bit Rate', type: 'number', value: 'bitRate' },
    { label: 'BPM', type: 'number', value: 'bpm' },
    { label: 'Channel Count', type: 'number', value: 'channelCount' },
    { label: 'Comment', type: 'text', value: 'comment' },
    { label: 'Date Added', type: 'date', value: 'createdDate' },
    { label: 'Date Favorited', type: 'date', value: 'userFavoriteDate' },
    { label: 'Date Last Played', type: 'date', value: 'userLastPlayedDate' },
    { label: 'Date Modified', type: 'date', value: 'updatedDate' },
    { label: 'Disc Subtitle', type: 'text', value: 'discSubtitle' },
    { label: 'Disc Number', type: 'number', value: 'discNumber' },
    { label: 'Duration', type: 'number', value: 'duration' },
    { label: 'File Path', type: 'text', value: 'filePath' },
    { label: 'File Size', type: 'number', value: 'fileSize' },
    { label: 'File Type', type: 'text', value: 'fileContainer' },
    { label: 'Genre', type: 'genreSelect', value: 'genres.id' },
    { label: 'Genre Name', type: 'text', value: 'genres.name' },
    { label: 'Is Compilation', type: 'boolean', value: 'isCompilation' },
    { label: 'Is Favorite', type: 'boolean', value: 'userFavorite' },
    { label: 'Name', type: 'text', value: 'name' },
    { label: 'Moods', type: 'text', value: 'moods' },
    { label: 'Play Count', type: 'number', value: 'userPlayCount' },
    { label: 'Rating', type: 'number', value: 'userRating' },
    { label: 'Release Year', type: 'number', value: 'releaseYear' },
    { label: 'Sort Name', type: 'text', value: 'sortName' },
    { label: 'Track Number', type: 'number', value: 'trackNumber' },
];

export const trackQueryOperators = {
    albumArtistSelect: [
        { input: 'albumArtistSelect', label: 'is', value: 'isIn' },
        { input: 'albumArtistSelect', label: 'is not', value: 'isNotIn' },
    ],
    albumSelect: [
        { input: 'albumSelect', label: 'is', value: 'is' },
        { input: 'albumSelect', label: 'is not', value: 'isNot' },
    ],
    artistSelect: [
        { input: 'artistSelect', label: 'is', value: 'isIn' },
        { input: 'artistSelect', label: 'is not', value: 'isNotIn' },
    ],
    boolean: [
        { input: 'boolean', label: 'is', value: 'is' },
        { input: 'boolean', label: 'is not', value: 'isNot' },
    ],
    date: [
        { input: 'date', label: 'is', value: 'is' },
        { input: 'date', label: 'is not', value: 'isNot' },
        { input: 'date', label: 'is before', value: 'before' },
        { input: 'date', label: 'is after', value: 'after' },
        { input: 'date', label: 'is in the last', value: 'inTheLast' },
        { input: 'date', label: 'is not in the last', value: 'notInTheLast' },
        // { input: 'dateRange', label: 'is in the range', value: 'inTheRange' },
    ],
    genreSelect: [
        { input: 'genreSelect', label: 'is', value: 'isIn' },
        { input: 'genreSelect', label: 'is not', value: 'isNotIn' },
    ],
    number: [
        { input: 'number', label: 'is', value: 'is' },
        { input: 'number', label: 'is not', value: 'isNot' },
        { input: 'number', label: 'is greater than', value: 'isGreaterThan' },
        { input: 'number', label: 'is less than', value: 'isLessThan' },
        { input: 'number', label: 'is greater than or equal to', value: 'isGreaterThanOrEqual' },
        { input: 'number', label: 'is less than or equal to', value: 'isLessThanOrEqual' },
        // { input: 'numberRange', label: 'is in the range', value: 'inTheRange' },
    ],
    select: [
        { input: 'select', label: 'is', value: 'is' },
        { input: 'select', label: 'is not', value: 'isNot' },
    ],
    text: [
        { input: 'text', label: 'is', value: 'is' },
        { input: 'text', label: 'is not', value: 'isNot' },
        { input: 'text', label: 'contains', value: 'contains' },
        { input: 'text', label: 'does not contain', value: 'notContains' },
        { input: 'text', label: 'starts with', value: 'startsWith' },
        { input: 'text', label: 'ends with', value: 'endsWith' },
    ],
};

export function TrackQueryBuilder() {
    const [filter, setFilter] = useState<QueryFilter>({
        limit: undefined,
        rules: {
            conditions: [
                {
                    condition: { is: 'true' },
                    conditionId: nanoid(),
                    field: 'isCompilation',
                },
                {
                    conditions: [
                        {
                            condition: { is: '' },
                            conditionId: nanoid(),
                            field: 'albumId',
                        },
                    ],
                    groupId: nanoid(),
                    operator: 'OR',
                },
            ],
            groupId: 'root',
            operator: 'AND',
        },
        sortBy: [],
    });

    const fields = useMemo(() => {
        return getFields({ fields: trackQueryFields, operators: trackQueryOperators });
    }, []);

    const handleFilterChange = (filter: QueryFilter) => {
        const sortConditions = (
            group: QueryBuilderGroup | QueryBuilderCondition,
        ): QueryBuilderGroup | QueryBuilderCondition => {
            if (!('operator' in group)) {
                return group;
            }

            const sortedConditions = [...group.conditions].sort((a, b) => {
                // Put LogicalGroups (with conditions array) last
                if ('operator' in a && !('operator' in b)) return 1;
                if (!('operator' in a) && 'operator' in b) return -1;
                return 0;
            });

            // Recursively sort nested conditions
            return {
                ...group,
                conditions: sortedConditions.map((condition) =>
                    'operator' in condition ? sortConditions(condition) : condition,
                ),
            };
        };

        setFilter({
            limit: filter.limit,
            rules: sortConditions(filter.rules),
            sortBy: filter.sortBy,
        });
    };

    return (
        <QueryBuilder
            filter={filter}
            queryFields={fields}
            sortFields={trackSortFields}
            onFilterChange={handleFilterChange}
        />
    );
}

function getFields(args: {
    fields: QueryBuilderField[];
    operators: Record<string, QueryBuilderOperator[]>;
}): QueryBuilderFields {
    const fieldOptions: QueryBuilderFields = {};

    args.fields.forEach((field) => {
        fieldOptions[field.value] = {
            label: field.label,
            operators: args.operators[field.type],
            type: field.type,
            value: field.value,
        };
    });

    return fieldOptions;
}
