export interface NavItem {
    name: string,
    disabled?: boolean,
    route?: string,
    children?: NavItem[]
}