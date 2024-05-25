import {
	Box,
	Button,
	Flex,
	GridItem,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import React from 'react';
import { bouncy } from 'ldrs';

bouncy.register();

// Default values shown

const RecipeGrid = () => {
	const pageSize = 10;
	const {
		data,
		error,
		isLoading,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useRecipes({ pageSize });

	if (isLoading)
		return (
			<Flex justifyContent='center' paddingY='20%'>
				<l-bouncy size='65' speed='1.75' color='black'></l-bouncy>
			</Flex>
		);
	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding='10px'
				spacing={6}
			>
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.map((recipe) => (
							<GridItem>
								<RecipeCard key={recipe.id} recipe={recipe} />
							</GridItem>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			<Button
				disabled={!hasNextPage || isFetchingNextPage}
				onClick={() => fetchNextPage()}
			>
				Next
			</Button>
		</>
	);
};

export default RecipeGrid;
