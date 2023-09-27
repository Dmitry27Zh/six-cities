import Header from '../header/header';
import { AppRoute } from '../../const';

function NotFoundScreen():JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <div className="container">
          <p>404 Not Found </p>
          <p><a href={AppRoute.Main}><b>Main page</b></a></p>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
