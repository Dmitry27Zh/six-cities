import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SigninScreen from '../signin-screen/signin-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers, Reviews } from '../../types/data';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offers={offers} />} />
        <Route path={AppRoute.Signin} element={<SigninScreen />}/>
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesScreen /></PrivateRoute>}/>
        <Route path={AppRoute.Room} element={<RoomScreen />}/>
        <Route path='*' element={<NotFoundScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
