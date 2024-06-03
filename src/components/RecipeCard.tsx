import {
	Badge,
	Button,
	Card,
	CardBody,
	Flex,
	Image,
	Stack,
} from '@chakra-ui/react';
import { Recipe } from '../hooks/useRecipes';
import RecipeIconList from './RecipeIconList';

interface Props {
	recipe: Recipe;
	onClick: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, onClick }: Props) => {
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

						<Flex minHeight='75px' justifyContent='center' padding={3}>
							<Button
								onClick={() => onClick(recipe)}
								whiteSpace='normal'
								variant='link'
								color='green.800'
							>
								{recipe.title}
							</Button>
							{/* <Heading textAlign='center' fontSize='lg'>
								{recipe.title}
							</Heading> */}
						</Flex>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default RecipeCard;
