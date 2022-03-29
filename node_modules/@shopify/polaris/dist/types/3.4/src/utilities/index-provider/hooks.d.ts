import { SelectionType, HandleSelectionChange, Range, BulkSelectionDataOptions, HandleBulkSelectionOptions } from './types';
export declare function useIndexSelectionChange(): (selectionType: SelectionType, toggleType: boolean, selection?: string | Range | undefined, position?: number | undefined) => void;
export declare function useIndexRow(): import("./context").IndexRowContextType;
export declare function useIndexValue(): import("./context").IndexContextType;
export declare function useBulkSelectionData({ selectedItemsCount, itemCount, hasMoreItems, resourceName: passedResourceName, }: BulkSelectionDataOptions): {
    paginatedSelectAllText: string | undefined;
    bulkActionsLabel: string;
    bulkActionsAccessibilityLabel: string;
    resourceName: {
        singular: string;
        plural: string;
    };
    selectMode: boolean;
    bulkSelectState: boolean | "indeterminate" | undefined;
    selectable: boolean;
};
export declare function useHandleBulkSelection({ onSelectionChange, }: HandleBulkSelectionOptions): HandleSelectionChange;
