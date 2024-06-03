import React from 'react';

interface DrawerContextType {
	btnRef: HTMLButtonElement | any;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const DrawerContext = React.createContext<DrawerContextType>(
	{} as DrawerContextType
);

export default DrawerContext;
