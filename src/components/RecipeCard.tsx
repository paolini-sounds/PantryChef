import {
	Badge,
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Stack,
} from '@chakra-ui/react';
import { Recipe } from '../hooks/useRecipes';
import RecipeIconList from './RecipeIconList';

interface Props {
	recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
	const displayReadyTime = (readyMinutes: number) => {
		if (readyMinutes < 60) return `${readyMinutes} minutes`;
		let hours = Math.floor(readyMinutes / 60);
		let minutes = (readyMinutes % 60).toString().padStart(2, '0');
		return `${hours} hr${hours > 1 && 's'} ${minutes} minutes`;
	};

	return (
		<div>
			<Card marginX={5} maxWidth='600px' borderRadius={10} overflow='hidden'>
				<Image src={recipe.image} />
				<CardBody>
					<Stack>
						<Flex justifyContent={'space-between'}>
							<RecipeIconList recipe={recipe} />
							<Badge variant='subtle' colorScheme='green'>
								{displayReadyTime(recipe.readyInMinutes)}
							</Badge>
						</Flex>

						<Box padding={3}>
							<Heading textAlign='center' fontSize='lg'>
								{recipe.title}
							</Heading>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default RecipeCard;
