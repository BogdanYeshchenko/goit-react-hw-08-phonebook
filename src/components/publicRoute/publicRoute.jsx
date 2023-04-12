const { useSelector } = require('react-redux');
const { Navigate, Outlet } = require('react-router-dom');

const PablicRoute = () => {
  const token = useSelector(state => state.log.token);
  return !token ? <Outlet /> : <Navigate to="/contacts" />;
};

export default PablicRoute;
