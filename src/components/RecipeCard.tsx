import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Recipe } from '../hooks/useRecipes';

interface Props {
	recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
	return (
		<Card marginX={5} maxWidth='600px' borderRadius={10} overflow='hidden'>
			<Image src={recipe.image} />
			<CardBody>
				<Heading fontSize='lg'>{recipe.title}</Heading>
			</CardBody>
		</Card>
	);
};

export default RecipeCard;
