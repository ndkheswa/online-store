export interface MenuItem {
  label: string;
  disabled?: boolean;
  route?: string;
  children?: MenuItem[];
}
