import React from 'react';
declare type ItemPosition = 'left' | 'right' | 'primary';
export interface ItemProps {
    /** Position of the item */
    position: ItemPosition;
    /** Item content */
    children?: React.ReactNode;
}
export declare function Item({ children, position }: ItemProps): JSX.Element;
export {};
