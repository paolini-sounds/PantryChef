import { Center, Flex, GridItem, useDisclosure } from '@chakra-ui/react';
import RecipeGrid from './components/RecipeGrid';
import NavBar from './components/NavBar';
import SidePanel from './components/filterPanel/SidePanel';
import { useRef } from 'react';
import QueryProvider from './components/contexts/QueryProvider';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<QueryProvider>
			<Flex direction='column' justifyContent='center'>
				<GridItem area='nav'>
					<NavBar btnRef={btnRef} onOpen={onOpen} />
				</GridItem>

				<SidePanel
					btnRef={btnRef}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
				/>
				<Center width='100%'>
					<RecipeGrid />
				</Center>
			</Flex>
		</QueryProvider>
	);
}

export default App;
