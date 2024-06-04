import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	GridItem,
	Heading,
	Image,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipe from '../hooks/useRecipe';
import RecipeIconList from './RecipeIconList';
import { displayReadyTime } from './RecipeCard';
import { RiKnifeLine } from 'react-icons/ri';
import { PiCookingPotBold } from 'react-icons/pi';

const RecipePage = () => {
	const { id } = useParams();
	const { data: recipe, isLoading, error } = useRecipe(id!);

	const navigate = useNavigate();

	if (isLoading)
		return (
			<Flex justifyContent='center' alignItems='center' paddingY='20%'>
				<l-bouncy size='65' speed='1.75' color='black'></l-bouncy>
			</Flex>
		);

	if (error || !recipe) throw error;

	const steps = recipe.analyzedInstructions[0].steps;

	return (
		<Box padding={10}>
			<Button onClick={() => navigate('/')}>Back</Button>
			<VStack margin={{ sm: 2, md: 5 }}>
				<Heading paddingY={5}>{recipe.title}</Heading>
			</VStack>
			<Card
				borderRadius={10}
				overflow='hidden'
				direction={{ sm: 'column', lg: 'row' }}
				width='100%'
				margin={{ sm: 2, md: 5 }}
				justifyContent='space-evenly'
			>
				<Image maxHeight='100%' objectFit='cover' src={recipe.image} />
				<CardBody
					width='50%'
					rowGap={5}
					justifyContent='flex-start'
					marginX={{ sm: 0, lg: 5 }}
				>
					<RecipeIconList size='lg' recipe={recipe} />

					<Heading size='sm' marginY={3}>
						Ready in: {displayReadyTime(recipe.readyInMinutes)}
					</Heading>

					<Heading marginY={3} size='sm'>
						Servings: {recipe.servings}
					</Heading>

					<Heading marginY={2} size='md'>
						Ingredients:
					</Heading>
					<List>
						<SimpleGrid columns={{ sm: 1 }}>
							{recipe.extendedIngredients.map((ingredient: any) => (
								<GridItem key={ingredient.id}>
									<ListItem fontSize='sm'>
										<ListIcon as={RiKnifeLine} color='green' />
										{ingredient.amount} {ingredient.unit} {ingredient.name}
									</ListItem>
								</GridItem>
							))}
						</SimpleGrid>
					</List>
				</CardBody>
			</Card>

			<List>
				<Heading marginY={2} size='lg'>
					Instructions
				</Heading>
				{steps.map((step: any) => (
					<ListItem key={step.number}>
						<ListIcon as={PiCookingPotBold} color='green' />
						{step.number}: {step.step}
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default RecipePage;
