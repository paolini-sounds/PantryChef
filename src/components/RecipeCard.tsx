import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";

interface Props {
	recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
	return (
		<Card borderRadius={10} overflow='hidden'>
			<Image src={recipe.image} />
			<CardBody>
				<Heading fontSize='xl'>{recipe.title}</Heading>
			</CardBody>
		</Card>
	);
};

export default RecipeCard;
