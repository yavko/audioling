import { useParams } from 'react-router-dom';
import { CreatePlaylistModal } from '@/features/playlists/create-playlist/create-playlist-modal.tsx';
import { Group } from '@/features/ui/group/group.tsx';
import { Icon } from '@/features/ui/icon/icon.tsx';
import { Menu } from '@/features/ui/menu/menu.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import styles from './create-playlist-button.module.scss';

export function CreatePlaylistButton() {
    const { libraryId } = useParams() as { libraryId: string };

    return (
        <Menu position="bottom-end">
            <Menu.Target>
                <button className={styles.button}>
                    <Group align="center" gap="md" justify="start" wrap="nowrap">
                        <Icon icon="add" size="lg" />
                        <Text size="md">Create New</Text>
                    </Group>
                </button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item onClick={() => CreatePlaylistModal.call({ libraryId })}>
                    Create Playlist
                </Menu.Item>
                <Menu.Item onClick={() => {}}>Create Folder</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
