import React from 'react';
import type { TabDescriptor } from '../../types';
export interface ListProps {
    focusIndex: number;
    disclosureTabs: TabDescriptor[];
    onClick?(id: string): void;
    onKeyPress?(event: React.KeyboardEvent<HTMLElement>): void;
}
export declare function List({ focusIndex, disclosureTabs, onClick, onKeyPress, }: ListProps): JSX.Element;
