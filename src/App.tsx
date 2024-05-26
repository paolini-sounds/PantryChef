import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
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
		<Grid
			templateAreas={{
				base: `"nav" "filters" "main"`,
				lg: `"nav   nav" "aside  main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar
					btnRef={btnRef}
					onOpen={onOpen}
					recipeQuery={recipeQuery}
					removeIngredient={(id) => removeIngredient(id)}
					onSearch={(searchText) => addIngredient(searchText)}
				/>
			</GridItem>

			<GridItem area={{ bade: 'filters', lg: 'aside' }} paddingX={5}>
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
			</GridItem>

			<GridItem gridArea='main'>
				<Box paddingX={{ sm: 2, md: 10, lg: 20 }}>
					<RecipeGrid recipeQuery={recipeQuery} />
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
