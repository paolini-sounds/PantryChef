import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import DrawerProvider from '../components/filterPanel/DrawerProvider';

const Layout = () => {
	return (
		<>
			<DrawerProvider>
				<NavBar />
				<Outlet />
			</DrawerProvider>
		</>
	);
};

export default Layout;
