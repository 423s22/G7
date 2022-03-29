import React from 'react';
export interface ScrollContainerProps {
    children: React.ReactNode;
    scrollableContainerRef: React.RefObject<HTMLDivElement>;
    onScroll(canScrollLeft: boolean, canScrollRight: boolean): void;
}
export declare function ScrollContainer({ children, scrollableContainerRef, onScroll, }: ScrollContainerProps): JSX.Element;
