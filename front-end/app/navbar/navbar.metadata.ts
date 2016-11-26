export enum MenuType {
  BRAND,
  LOGIN,
  LOGOUT
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}
