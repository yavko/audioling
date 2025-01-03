import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router';
import { IconButton, IconButtonWithTooltip } from '@/features/ui/icon-button/icon-button.tsx';
import { TextInput } from '@/features/ui/text-input/text-input.tsx';
import { useDebouncedState } from '@/hooks/use-debounced-state.ts';
import styles from './search-button.module.scss';

export function SearchButton() {
    const [isOpen, setIsOpen] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = (isOpen: boolean, clear?: boolean) => {
        if (clear) {
            setSearchValue('');
        }

        setIsOpen(isOpen);

        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    };

    const [searchValue, setSearchValue] = useDebouncedState(searchParams.get('search') ?? '', 300);

    useEffect(() => {
        setSearchParams(
            (prev) => {
                if (!searchValue) {
                    prev.delete('search');
                } else {
                    prev.set('search', searchValue);
                }

                return prev;
            },
            {
                replace: true,
            },
        );
    }, [searchValue, setSearchParams]);

    return (
        <>
            {isOpen && (
                <motion.div
                    animate={{ width: 'auto' }}
                    exit={{ width: '0' }}
                    initial={{ width: '3rem' }}
                    transition={{ duration: 0.1 }}
                >
                    <TextInput
                        ref={inputRef}
                        className={styles.searchButton}
                        defaultValue={searchValue}
                        rightSection={
                            <IconButton
                                icon="x"
                                size="sm"
                                variant="transparent"
                                onClick={() => handleClick(false, true)}
                            />
                        }
                        size="xs"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </motion.div>
            )}
            {!isOpen && (
                <IconButtonWithTooltip
                    isCompact
                    className={styles.searchButton}
                    icon="search"
                    size="lg"
                    tooltipProps={{ label: 'Search', openDelay: 500, position: 'bottom' }}
                    onClick={() => handleClick(true)}
                />
            )}
        </>
    );
}
