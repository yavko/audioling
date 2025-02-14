import { ErrorBoundary } from 'react-error-boundary';
import { Button } from '@/features/ui/button/button.tsx';
import { Center } from '@/features/ui/center/center.tsx';
import { ErrorBlock } from '@/features/ui/error-block/error-block.tsx';
import { Group } from '@/features/ui/group/group.tsx';
import { Stack } from '@/features/ui/stack/stack.tsx';
import { Title } from '@/features/ui/title/title.tsx';

interface ComponentErrorBoundaryProps {
    children: React.ReactNode;
    onReset?: () => void;
}

export function ComponentErrorBoundary({ children, onReset }: ComponentErrorBoundaryProps) {
    return (
        <ErrorBoundary fallbackRender={fallbackRender} onReset={onReset}>
            {children}
        </ErrorBoundary>
    );
}

function fallbackRender({
    error,
    resetErrorBoundary,
}: {
    error: Error;
    resetErrorBoundary: () => void;
}) {
    const handleReload = () => {
        if (resetErrorBoundary) {
            resetErrorBoundary();
        } else {
            window.location.reload();
        }
    };

    return (
        <Center
            style={{
                outline: '2px solid var(--global-danger-color)',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <Stack gap="md" maw="480px" p="md" w="100%">
                <Title order={1} size="lg">
                    An error occurred
                </Title>
                <ErrorBlock error={error} />
                <Group grow>
                    <Button variant="filled" onClick={handleReload}>
                        Reload
                    </Button>
                </Group>
            </Stack>
        </Center>
    );
}
