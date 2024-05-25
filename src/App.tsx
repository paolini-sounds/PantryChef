import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import RecipeGrid from './components/RecipeGrid';
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import { useState } from 'react';
import GridHeading from './components/GridHeading';

export interface RecipeQuery {
	ingredients: string[];
	restrictions: string[];
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
					<GridHeading recipeQuery={recipeQuery} />
					<RecipeGrid />
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
