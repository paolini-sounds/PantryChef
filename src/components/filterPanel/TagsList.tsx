import {
	Tag,
	TagLabel,
	TagCloseButton,
	Flex,
	VStack,
	Button,
} from '@chakra-ui/react';
import useRecipeQueryStore from '../../stores/recipeQueryStore';

const TagsList = () => {
	const [
		recipeQuery,
		deleteIngredient,
		deleteDiet,
		deleteIntolerance,
		clearAll,
	] = useRecipeQueryStore((s) => [
		s.recipeQuery,
		s.deleteIngredient,
		s.deleteDiet,
		s.deleteIntolerance,
		s.clearAll,
	]);

	if (
		!recipeQuery.ingredients?.length &&
		!recipeQuery.intolerances?.length &&
		!recipeQuery.diets?.length
	) {
		return null;
	}

	return (
		<VStack>
			<Button variant='outline' onClick={clearAll} size='sm'>
				Clear All Filters
			</Button>
			<Flex>
				{recipeQuery.ingredients &&
					recipeQuery.ingredients.map((ingredient) => (
						<Tag variant='outline' margin={1} key={ingredient.id}>
							<TagLabel>{ingredient.name}</TagLabel>
							<TagCloseButton onClick={() => deleteIngredient(ingredient.id)} />
						</Tag>
					))}
				{recipeQuery.intolerances &&
					recipeQuery.intolerances.map((intolerance) => (
						<Tag variant='outline' margin={1} key={intolerance}>
							<TagLabel>No {intolerance}</TagLabel>
							<TagCloseButton onClick={() => deleteIntolerance(intolerance)} />
						</Tag>
					))}
				{recipeQuery.diets &&
					recipeQuery.diets.map((diet) => (
						<Tag variant='outline' margin={1} key={diet}>
							<TagLabel>{diet}</TagLabel>
							<TagCloseButton onClick={() => deleteDiet(diet)} />
						</Tag>
					))}
			</Flex>
		</VStack>
	);
};

export default TagsList;
