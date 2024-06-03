import {
	Flex,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	CloseButton,
	Stack,
	Divider,
} from '@chakra-ui/react';
import ExcludeIngredientsPanel from './ExcludeIngredientsPanel';
import DietPanel from './DietPanel';
import { useContext } from 'react';
import DrawerContext from './drawerContext';

const SidePanel = () => {
	const { isOpen, onClose, btnRef } = useContext(DrawerContext);

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
				size={{ sm: 'xs', lg: 'sm' }}
			>
				<DrawerOverlay />
				<DrawerContent border='1px solid black' height='100vh'>
					<Flex padding={2} direction='column' align='flex-end'>
						<CloseButton onClick={onClose} />
					</Flex>

					<DrawerHeader padding={5} fontSize='xl'>
						Additional Search Options:
					</DrawerHeader>
					<DrawerBody>
						<Stack spacing={5}>
							<ExcludeIngredientsPanel />
							<Divider />
							<DietPanel />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SidePanel;
