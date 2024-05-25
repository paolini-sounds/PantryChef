import { Box, Heading, ListItem, Flex, Tag } from '@chakra-ui/react';
import { RecipeQuery } from '../App';

interface Props {
	recipeQuery: RecipeQuery;
}

const SidePanel = ({ recipeQuery }: Props) => {
	return (
		<Box
			border='1px solid black'
			width='100%'
			height={{ sm: '25vh', lg: '75vh' }}
		>
			<Heading padding={5} fontSize='xl'>
				Filters:
			</Heading>

			<Flex
				padding={5}
				width='100%'
				justifyContent='space-between'
				flexDirection={{ sm: 'row', lg: 'column' }}
			>
				{recipeQuery.ingredients?.length > 0 && (
					<Box
						minHeight={{ sm: '0', lg: '50px' }}
						height={{ sm: '100%', lg: '35%' }}
						width={{ sm: '35%', lg: '100%' }}
					>
						<Heading paddingY={3} fontSize='lg'>
							Include Ingredients:{' '}
						</Heading>
						{recipeQuery.ingredients &&
							recipeQuery.ingredients.map((ingredient) => (
								<Tag margin={1}>{ingredient}</Tag>
							))}
					</Box>
				)}
				<Box
					height={{ sm: '100%', lg: '35%' }}
					width={{ sm: '35%', lg: '100%' }}
				>
					<Heading paddingY={3} fontSize='lg'>
						Restrictions:{' '}
					</Heading>
					{recipeQuery.restrictions &&
						recipeQuery.restrictions.map((restriction) => (
							<Tag>{restriction}</Tag>
						))}
				</Box>
			</Flex>
		</Box>
	);
};

export default SidePanel;
