import { Box, Grid, GridItem } from '@chakra-ui/react';
import RecipeGrid from './components/RecipeGrid';
import NavBar from './components/NavBar';
import SidePanel from './components/filterPanel/SidePanel';
import { useState } from 'react';

export interface RecipeQuery {
	pageSize: number;
	ingredients?: string[];
	intolerances?: string[];
	excludeIngredients?: string[];
	diets?: string[];
}

function App() {
	const [recipeQuery, setRecipeQuery] = useState<RecipeQuery>(
		{} as RecipeQuery
	);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "filters" "main"`,
				lg: `"nav   nav" "aside  main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '25% 1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar
					onSearch={(searchText) =>
						setRecipeQuery({
							...recipeQuery,
							ingredients: recipeQuery.ingredients
								? [...recipeQuery.ingredients, searchText]
								: [searchText],
						})
					}
				/>
			</GridItem>

			<GridItem area={{ bade: 'filters', lg: 'aside' }} paddingX={5}>
				<SidePanel recipeQuery={recipeQuery} />
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
