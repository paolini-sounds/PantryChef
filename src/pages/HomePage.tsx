import { useDisclosure, Flex, Center } from '@chakra-ui/react';
import { useRef } from 'react';
import RecipeGrid from '../components/RecipeGrid';
import SidePanel from '../components/filterPanel/SidePanel';

const HomePage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);
	return (
		<Flex direction='column' justifyContent='center'>
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
	);
};

export default HomePage;
