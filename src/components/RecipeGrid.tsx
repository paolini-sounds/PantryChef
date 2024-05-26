import {
	Button,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import useRecipes, { Recipe } from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import React from 'react';
import { bouncy } from 'ldrs';
import GridHeading from './GridHeading';
import { RecipeQuery } from '../hooks/useQueryParams';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiMaskSadLight } from 'react-icons/pi';

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

	if (error) return <Text>Error: {error.message}</Text>;
	return (
		<Flex
			direction='column'
			width={{ sm: '90%', md: '80%', lg: '70%', xl: '60%' }}
			padding='0'
		>
			<GridHeading recipeQuery={recipeQuery} />
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
				spacing={{ sm: 5, md: 3, lg: 2, xl: 1 }}
			>
				{(data?.pages as Array<any>).map((page, index) => (
					<React.Fragment key={index}>
						{page.map((recipe: Recipe) => (
							<GridItem key={recipe.id}>
								<RecipeCard recipe={recipe} />
							</GridItem>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>

			{hasNextPage && (
				<Button
					margin={5}
					size='xl'
					variant='link'
					disabled={!hasNextPage || isFetchingNextPage}
					onClick={() => fetchNextPage()}
				>
					Load More
					<MdOutlineKeyboardArrowDown />
				</Button>
			)}
		</Flex>
	);
};

export default RecipeGrid;
