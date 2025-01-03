import { LibraryType } from '@repo/shared-types';
// import JellyfinIcon from '@/assets/logos/jellyfin.png';
// import NavidromeIcon from '@/assets/logos/navidrome.png';
import clsx from 'clsx';
import SubsonicIcon from '@/assets/logos/opensubsonic.png';
import { Button } from '@/features/ui/button/button.tsx';
import { Stack } from '@/features/ui/stack/stack.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import styles from './library-type-selector.module.scss';

const LIBRARY_SELECTIONS = [
    {
        label: <LibraryTypeSelectorItem icon={SubsonicIcon} label="Subsonic" />,
        value: LibraryType.SUBSONIC,
    },
    // {
    //     label: (
    //         <LibraryTypeSelectorItem
    //             icon={JellyfinIcon}
    //             label="Jellyfin"
    //         />
    //     ),
    //     value: LibraryType.JELLYFIN,
    // },
    // {
    //     label: (
    //         <LibraryTypeSelectorItem
    //             icon={NavidromeIcon}
    //             label="Navidrome"
    //         />
    //     ),
    //     value: LibraryType.NAVIDROME,
    // },
];

interface LibraryTypeSelectorProps {
    disabled?: boolean;
    onChange: (value: LibraryType) => void;
    value: LibraryType;
}

export const LibraryTypeSelector = ({ onChange, value }: LibraryTypeSelectorProps) => {
    return (
        <div className={styles.root}>
            {LIBRARY_SELECTIONS.map(({ label, value: selectionValue }) => (
                <Button
                    key={selectionValue}
                    className={clsx({ [styles.indicator]: selectionValue === value })}
                    onClick={() => onChange(selectionValue)}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
};

function LibraryTypeSelectorItem(props: { icon: string; label: string }) {
    const { icon, label } = props;

    return (
        <Stack align="center" gap="xs">
            <Text>{label}</Text>
            <img alt={`${label} icon`} height={32} src={icon} width={32} />
        </Stack>
    );
}
