import { useDisclosure } from '@chakra-ui/react';
import DrawerContext from './drawerContext';
import { ReactNode, useRef } from 'react';

interface Props {
	children: ReactNode;
}

const DrawerProvider = ({ children }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<DrawerContext.Provider value={{ btnRef, isOpen, onOpen, onClose }}>
			{children}
		</DrawerContext.Provider>
	);
};

export default DrawerProvider;
