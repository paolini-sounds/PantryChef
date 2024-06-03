import { useDisclosure } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<NavBar btnRef={btnRef} onOpen={onOpen} />
			<Outlet />
		</>
	);
};

export default Layout;
