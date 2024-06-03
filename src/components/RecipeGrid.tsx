import {
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Spinner,
	Stack,
	Text,
} from '@chakra-ui/react';
import useRecipes, { Recipe } from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import React, { useState } from 'react';
import { bouncy } from 'ldrs';
import GridHeading from './GridHeading';
import { PiMaskSadLight } from 'react-icons/pi';
import InfiniteScroll from 'react-infinite-scroll-component';
import RecipePage from './RecipePage';

bouncy.register();

const RecipeGrid = () => {
	const { data, error, isLoading, hasNextPage, fetchNextPage } = useRecipes();
	const [recipePage, setRecipePage] = useState<Recipe>({} as Recipe);

	if (isLoading)
		return (
			<Flex justifyContent='center' alignItems='center' paddingY='20%'>
				<l-bouncy size='65' speed='1.75' color='black'></l-bouncy>
			</Flex>
		);

	if (Array.isArray(data?.pages[0]) && data?.pages[0]?.length === 0) {
		return (
			<Stack
				justifyContent='center'
				marginTop={10}
				direction={{ sm: 'column', md: 'row' }}
			>
				<Heading>Sorry, no recipes found</Heading>
				<PiMaskSadLight size='25px' />
			</Stack>
		);
	}

	if (error) {
		const isStatusCode402 = error.message.includes('status code 402');
		if (isStatusCode402) {
			return (
				<Text>
					Sorry, the maximum daily points of this API service has been met.
					Please try another day.{' '}
				</Text>
			);
		}
		return (
			<Text>
				{error.name}: {error.message}
			</Text>
		);
	}

	const fetchedRecipesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (recipePage.id) return <RecipePage recipe={recipePage} />;

	return (
		<Flex
			direction='column'
			width={{ sm: '90%', md: '80%', lg: '70%', xl: '60%' }}
			padding='0'
		>
			<GridHeading />
			<InfiniteScroll
				dataLength={fetchedRecipesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}
			>
				<SimpleGrid
					columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
					spacing={{ sm: 5, md: 4, lg: 4, xl: 3 }}
				>
					{(data?.pages as Array<any>).map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((recipe: Recipe) => (
								<GridItem key={recipe.id}>
									<RecipeCard
										onClick={(selectedRecipe) => setRecipePage(selectedRecipe)}
										recipe={recipe}
									/>
								</GridItem>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
		</Flex>
	);
};

export default RecipeGrid;
