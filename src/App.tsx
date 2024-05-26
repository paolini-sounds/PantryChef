import {
	Box,
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	useDisclosure,
} from '@chakra-ui/react';
import RecipeGrid from './components/RecipeGrid';
import NavBar from './components/NavBar';
import SidePanel from './components/filterPanel/SidePanel';
import { useRef } from 'react';
import useQueryParams from './hooks/useQueryParams';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);
	const {
		recipeQuery,
		addIngredient,
		removeIngredient,
		handleSelectIntolerance,
		handleSelectDiet,
	} = useQueryParams();

	return (
		<Flex direction='column' justifyContent='center'>
			<GridItem area='nav'>
				<NavBar
					btnRef={btnRef}
					onOpen={onOpen}
					recipeQuery={recipeQuery}
					removeIngredient={(id) => removeIngredient(id)}
					onSearch={(searchText) => addIngredient(searchText)}
				/>
			</GridItem>

			<SidePanel
				onSelectIntolerance={(value, isChecked) =>
					handleSelectIntolerance(value, isChecked)
				}
				onSelectDiet={(value, isChecked) => {
					handleSelectDiet(value, isChecked);
				}}
				btnRef={btnRef}
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				recipeQuery={recipeQuery}
			/>
			<Center width='100%'>
				<RecipeGrid recipeQuery={recipeQuery} />
			</Center>
		</Flex>
	);
}

export default App;
