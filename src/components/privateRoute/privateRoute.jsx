const { useSelector } = require('react-redux');
const { Navigate, Outlet } = require('react-router-dom');

const PrivateRoute = () => {
  const token = useSelector(state => state.log.token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
