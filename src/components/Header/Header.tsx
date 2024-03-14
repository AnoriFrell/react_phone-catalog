import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';
import { Logo } from '../Logo/Logo';
// import { Nav } from '../Nav/Nav';

export const Header = () => {
  // const { favourites, cart } = useAppSelector(state => state.phones);
  // const { pathname } = useLocation();
  // const normalizedPath = pathname.slice(1);
  // const isCart = normalizedPath === 'cart';

  return (
    <header className="header">
      <div className="header_left">
        <Logo />

        {/* {!isCart && <Nav />} */}
      </div>

      <div className="header_right">
        {/* { && ( */}
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            classNames('header_favourites', {
              'header_favourites-is-active': isActive,
            })
          }
        >
          {/* <div className="icon icon-favourites header__favourites-img">
              {!!favourites.length && (
                <div className="header__img-status">{favourites.length}</div>
              )}
            </div> */}
        </NavLink>
        {/* )} */}

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            classNames('header__cart', {
              'header__cart-is-active': isActive,
            })
          }
        >
          {/* <div className="icon icon-cart header__cart-img">
            {!!cart.length && (
              <div className="header__img-status">{cart.length}</div>
            )}
          </div> */}
        </NavLink>
      </div>
    </header>
  );
};