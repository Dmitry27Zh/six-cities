export const Setting = {};

export const MAX_RATING = 5;

export enum AppRoute {
  Main = '/',
  Signin = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
