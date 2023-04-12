import { Navigate, Route, Routes } from 'react-router-dom';
import PhoneBook from './page/phonebook';
import Layout from './layout/Layout';
import LogIn from './page/logIn';
import Register from './page/register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from 'redux/log/operationsLog';
import PrivateRoute from './privateRoute/privateRoute';
import PablicRoute from './publicRoute/publicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.log.token);

  useEffect(() => {
    if (token) {
      dispatch(currentThunk(token));
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={token ? 'contacts' : 'login'} />}
          />
          <Route path="" redire element={<PablicRoute />} e>
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="contacts" element={<PhoneBook />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
