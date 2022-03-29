import React, { ReactNode } from 'react';
export interface CellProps {
    children?: ReactNode;
    flush?: boolean;
}
export declare const Cell: React.NamedExoticComponent<CellProps>;
