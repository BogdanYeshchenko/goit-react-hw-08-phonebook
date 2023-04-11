import ConteinerCenter from 'components/conteiner/conteinerCenter';
import Header from 'components/page/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <ConteinerCenter>
        <Header />
      </ConteinerCenter>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
