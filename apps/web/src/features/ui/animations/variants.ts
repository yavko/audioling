import type { Variants } from 'motion/react';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
};

const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
};

const zoomOut: Variants = {
    hidden: { opacity: 1, scale: 1 },
    show: { opacity: 0, scale: 0.5 },
};

const slideInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

const slideInDown: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
};

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
};

const scaleY: Variants = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    show: { height: 'auto', opacity: 1 },
};

const blurIn: Variants = {
    hidden: { filter: 'blur(10px)' },
    show: { filter: 'blur(0px)' },
};

const flipHorizontal: Variants = {
    hidden: { x: '-100%' },
    show: { x: 0 },
};

const flipVertical: Variants = {
    hidden: { y: '-100%' },
    show: { y: 0 },
};

const combine = (...variants: Variants[]) => ({
    ...variants.reduce((acc, variant) => ({ ...acc, ...variant }), {}),
});

const stagger = (variants: Variants, delay?: number) => ({
    ...variants,
    show: {
        ...variants.show,
        transition: {
            staggerChildren: delay ?? 0.1,
        },
    },
});

export const animationVariants = {
    blurIn,
    combine,
    fadeIn,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    flipHorizontal,
    flipVertical,
    scaleY,
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp,
    stagger,
    zoomIn,
    zoomOut,
};
