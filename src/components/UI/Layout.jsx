import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='App font-nunito text-darkBlue-text overflow-hidden bg-white-bg dark:bg-darkBlue-bg text-sm'>
      <Outlet />
    </div>
  );
}

export default Layout;
