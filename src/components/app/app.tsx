import { AppRoute } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SigninScreen from '../signin-screen/signin-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesCount={placesCount} />} />
        <Route path={AppRoute.Signin} element={<SigninScreen />}/>
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />}/>
        <Route path={AppRoute.Room} element={<RoomScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
