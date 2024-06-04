import { Flex, Center } from '@chakra-ui/react';
import RecipeGrid from '../components/RecipeGrid';
import SidePanel from '../components/filterPanel/SidePanel';
import SearchBar from '../components/SearchBar';
import DrawerProvider from '../components/filterPanel/DrawerProvider';

const HomePage = () => {
	return (
		<DrawerProvider>
			<Flex direction='column' justifyContent='center'>
				<SearchBar />
				<SidePanel />
				<Center width='100%'>
					<RecipeGrid />
				</Center>
			</Flex>
		</DrawerProvider>
	);
};

export default HomePage;
