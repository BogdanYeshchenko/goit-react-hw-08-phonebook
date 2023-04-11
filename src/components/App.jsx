import { Route, Routes } from 'react-router-dom';
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
          <Route path="" element={<PablicRoute />} e>
            <Route index path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route index path="contacts" element={<PhoneBook />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
