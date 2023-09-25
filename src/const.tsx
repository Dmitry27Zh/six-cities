export const Setting = {
  PLACES_COUNT: 3,
};

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
