export interface IconProp {
    icon: string;
    width?: string;
    height?: string;
    order?: number;
}

export interface DropdownMenuItem extends Record<string, string> {
    id?: number | string;
}
