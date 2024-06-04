import {
	Badge,
	Button,
	Card,
	CardBody,
	Flex,
	Image,
	Stack,
} from '@chakra-ui/react';
import { Recipe } from '../entities/Recipe';
import RecipeIconList from './RecipeIconList';
import { Link } from 'react-router-dom';

interface Props {
	recipe: Recipe;
}

export const displayReadyTime = (readyMinutes: number) => {
	if (readyMinutes < 60) return `${readyMinutes} minutes`;
	let hours = Math.floor(readyMinutes / 60);
	let minutes = (readyMinutes % 60).toString().padStart(2, '0');
	return `${hours} hr${hours > 1 && 's'} ${minutes} minutes`;
};

const RecipeCard = ({ recipe }: Props) => {
	return (
		<div>
			<Card
				_hover={{
					transform: 'scale(1.03)',
					transition: 'transform .15s ease-in',
				}}
				marginX={5}
				marginY={3}
				maxWidth='600px'
				borderRadius={10}
				overflow='hidden'
			>
				<Image src={recipe.image} />
				<CardBody>
					<Stack>
						<Flex height={5} justifyContent={'space-between'}>
							<RecipeIconList recipe={recipe} />
							<Badge variant='subtle' colorScheme='green'>
								{displayReadyTime(recipe.readyInMinutes)}
							</Badge>
						</Flex>

						<Flex minHeight='75px' justifyContent='center' padding={3}>
							<Button whiteSpace='normal' variant='link' color='green.800'>
								<Link to={'/recipes/' + recipe.id.toString()}>
									{recipe.title}
								</Link>
							</Button>
						</Flex>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default RecipeCard;
