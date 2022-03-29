import React from 'react';
import { Item } from './components';
declare type Type = 'bullet' | 'number';
export interface ListProps {
    /**
     * Type of list to display
     * @default 'bullet'
     */
    type?: Type;
    /** List item elements */
    children?: React.ReactNode;
}
export declare const List: React.FunctionComponent<ListProps> & {
    Item: typeof Item;
};
export {};
