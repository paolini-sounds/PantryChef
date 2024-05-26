import { Heading, Tag, TagLabel, TagCloseButton, Box } from '@chakra-ui/react';

import { RecipeQuery } from '../../App';

interface Props {
	recipeQuery: RecipeQuery;
}

const IncludeIngredientsPanel = ({ recipeQuery }: Props) => {
	return (
		recipeQuery.ingredients?.length && (
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
						<Tag variant='outline' margin={1}>
							<TagLabel>{ingredient}</TagLabel>
							<TagCloseButton />
						</Tag>
					))}
			</Box>
		)
	);
};

export default IncludeIngredientsPanel;
