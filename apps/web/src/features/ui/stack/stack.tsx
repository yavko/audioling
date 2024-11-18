import { forwardRef } from 'react';
import { Stack as MantineStack } from '@mantine/core';
import clsx from 'clsx';
import { motion } from 'motion/react';
import type { Sizes } from '@/themes/index.ts';
import styles from './stack.module.scss';

interface StackProps extends React.ComponentPropsWithoutRef<'div'> {
    align?: 'start' | 'center' | 'end' | 'between' | 'stretch';
    as?: React.ElementType;
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
    h?: string;
    justify?: 'start' | 'center' | 'end' | 'between';
    m?: Sizes;
    mah?: string;
    maw?: string;
    mih?: string;
    miw?: string;
    mx?: Sizes;
    my?: Sizes;
    p?: Sizes;
    px?: Sizes;
    py?: Sizes;
    w?: string;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((props: StackProps, ref) => {
    const {
        align,
        as,
        children,
        gap,
        justify,
        w,
        maw,
        h,
        mah,
        mih,
        miw,
        m,
        mx,
        my,
        p,
        px,
        py,
        ...htmlProps
    } = props;

    const rootClassNames = clsx({
        [styles.gapXs]: gap === 'xs',
        [styles.gapSm]: gap === 'sm',
        [styles.gapMd]: gap === 'md',
        [styles.gapLg]: gap === 'lg',
        [styles.gapXl]: gap === 'xl',
        [styles.marginXSm]: mx === 'sm' || m === 'sm',
        [styles.marginXMd]: mx === 'md' || m === 'md',
        [styles.marginXlg]: mx === 'lg' || m === 'lg',
        [styles.marginXxl]: mx === 'xl' || m === 'xl',
        [styles.marginYSm]: my === 'sm' || m === 'sm',
        [styles.marginYMd]: my === 'md' || m === 'md',
        [styles.marginYlg]: my === 'lg' || m === 'lg',
        [styles.marginYxl]: my === 'xl' || m === 'xl',
        [styles.paddingXSm]: px === 'sm' || p === 'sm',
        [styles.paddingXMd]: px === 'md' || p === 'md',
        [styles.paddingXlg]: px === 'lg' || p === 'lg',
        [styles.paddingXxl]: px === 'xl' || p === 'xl',
        [styles.paddingYSm]: py === 'sm' || p === 'sm',
        [styles.paddingYMd]: py === 'md' || p === 'md',
        [styles.paddingYlg]: py === 'lg' || p === 'lg',
        [styles.paddingYxl]: py === 'xl' || p === 'xl',
    });

    return (
        <MantineStack
            ref={ref}
            align={getAlign(align)}
            classNames={{ root: rootClassNames }}
            component={as}
            h={h}
            justify={getJustify(justify)}
            mah={mah}
            maw={maw}
            mih={mih}
            miw={miw}
            w={w}
            {...htmlProps}
        >
            {children}
        </MantineStack>
    );
});

Stack.displayName = 'Stack';

export const MotionStack = motion.create(Stack);

function getJustify(justify: StackProps['justify']) {
    switch (justify) {
        case 'start':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'end':
            return 'flex-end';
        case 'between':
            return 'space-between';
    }

    return undefined;
}

function getAlign(align: StackProps['align']) {
    switch (align) {
        case 'start':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'end':
            return 'flex-end';
        case 'between':
            return 'space-between';
        case 'stretch':
            return 'stretch';
    }

    return undefined;
}
