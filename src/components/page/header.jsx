import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import { logOutThunk } from 'redux/log/operationsLog';
import css from './phonebook.module.css';
import ConteinerCenter from 'components/conteiner/conteinerCenter';

const { NavLink } = require('react-router-dom');

function Header() {
  const token = useSelector(state => state.log.token);
  const name = useSelector(state => state.log.user.name);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOutThunk());
  }

  return (
    <header className="header">
      <div className={css.boockBox}>
        <ConteinerCenter>
          <nav className="nav">
            {token ? (
              <>
                <span className="hello">Hello {name}!</span>

                <NavLink onClick={handleLogOut} className="nav-link" to={'/'}>
                  <span>Log Out</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to={'/register'}>
                  Register
                </NavLink>
                <NavLink className="nav-link" to={'/login'}>
                  Log In
                </NavLink>
              </>
            )}
          </nav>
        </ConteinerCenter>
      </div>
    </header>
  );
}

export default Header;
