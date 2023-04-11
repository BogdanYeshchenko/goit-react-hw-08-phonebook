const { useSelector } = require('react-redux');
const { Navigate, Outlet } = require('react-router-dom');

const PrivateRoute = () => {
  const isLogIn = useSelector(state => state.log.isLogIn);
  return isLogIn ? <Outlet /> : <Navigate to="/contacts" />;
};

export default PrivateRoute;
