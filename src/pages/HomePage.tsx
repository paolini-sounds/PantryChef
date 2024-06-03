import { Flex, Center } from '@chakra-ui/react';
import RecipeGrid from '../components/RecipeGrid';
import SidePanel from '../components/filterPanel/SidePanel';

const HomePage = () => {
	return (
		<Flex direction='column' justifyContent='center'>
			<SidePanel />
			<Center width='100%'>
				<RecipeGrid />
			</Center>
		</Flex>
	);
};

export default HomePage;
