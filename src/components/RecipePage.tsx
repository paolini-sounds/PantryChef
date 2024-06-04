import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
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
		<Box paddingY={{ base: 5, lg: 10 }} paddingX={{ base: 2, md: 10, lg: 100 }}>
			<Button onClick={() => navigate('/')}>Back</Button>
			<VStack margin={{ sm: 0, md: 5 }}>
				<Heading paddingY={5}>{recipe.title}</Heading>
			</VStack>
			<Flex
				direction='column'
				width='100%'
				alignItems='center'
				justifyContent='center'
			>
				<Card
					maxWidth={{ base: '1000px', md: '500px', lg: '1200px' }}
					minWidth={{ base: '0', lg: '800px' }}
					borderRadius={10}
					overflow='hidden'
					direction={{ base: 'column', lg: 'row' }}

					// justifyContent={{ sm: 'flex-start', md: 'space-evenly' }}
				>
					<Flex width={{ base: '100%', lg: '50%' }}>
						<Image objectFit='contain' src={recipe.image} />
					</Flex>

					<CardBody
						marginX={{ base: 0, lg: 5 }}
						width={{ base: '100%', lg: '50%' }}
					>
						<RecipeIconList size='lg' recipe={recipe} />

						<Heading size='sm' marginY={3}>
							Ready in: {displayReadyTime(recipe.readyInMinutes)}
						</Heading>

						<Heading marginY={3} size='sm'>
							Servings: {recipe.servings}
						</Heading>
						<Divider />
						<Heading marginY={2} size='md'>
							Ingredients:
						</Heading>
						<List>
							<SimpleGrid columns={{ sm: 1, md: 2 }}>
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

				<Box
					paddingLeft={10}
					maxWidth={{ base: '1000px', md: '500px', lg: '1000px' }}
					minWidth={{ base: '0', lg: '800px' }}
				>
					<List>
						<Heading marginY={{ base: 5, lg: 10 }} size='lg'>
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
			</Flex>
		</Box>
	);
};

export default RecipePage;
