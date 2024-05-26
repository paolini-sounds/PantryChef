import { Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import useRecipes, { Recipe } from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import React from 'react';
import { bouncy } from 'ldrs';
import CustomButton from './CustomButton';
import GridHeading from './GridHeading';
import { RecipeQuery } from '../hooks/useQueryParams';

bouncy.register();

interface Props {
	recipeQuery: RecipeQuery;
}

const RecipeGrid = ({ recipeQuery }: Props) => {
	const pageSize = 10;
	const {
		data,
		error,
		isLoading,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useRecipes({ ...recipeQuery, pageSize });

	if (isLoading)
		return (
			<Flex justifyContent={'flex-start'} paddingY='20%'>
				<l-bouncy size='65' speed='1.75' color='black'></l-bouncy>
			</Flex>
		);

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			{isLoading && (
				<Flex justifyContent={'flex-start'} paddingY='20%'>
					<l-bouncy size='65' speed='1.75' color='black'></l-bouncy>
				</Flex>
			)}
			<GridHeading recipeQuery={recipeQuery} />
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
				{(data.pages as Array<any>).map((page, index) => (
					<React.Fragment key={index}>
						{page.map((recipe: Recipe) => (
							<GridItem key={recipe.id}>
								<RecipeCard recipe={recipe} />
							</GridItem>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			<CustomButton
				disabled={!hasNextPage || isFetchingNextPage}
				onClick={fetchNextPage}
			>
				Load More
			</CustomButton>
		</>
	);
};

export default RecipeGrid;
