import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import useRecipeQueryStore from '../../stores/recipeQueryStore';

const ExcludeIngredientsPanel = () => {
	const intoleranceOptions = [
		{ value: 'dairy', label: 'Dairy' },
		{ value: 'egg', label: 'Egg' },
		{ value: 'gluten', label: 'Gluten' },
		{ value: 'grain', label: 'Grain' },
		{ value: 'peanut', label: 'Peanut' },
		{ value: 'seafood', label: 'Seafood' },
		{ value: 'sesame', label: 'Sesame' },
		{ value: 'shellfish', label: 'Shellfish' },
		{ value: 'soy', label: 'Soy' },
		{ value: 'sulfite', label: 'Sulfite' },
		{ value: 'tree nut', label: 'Tree Nut' },
		{ value: 'wheat', label: 'Wheat' },
	];

	const [selectIntolerance, recipeQuery] = useRecipeQueryStore((s) => [
		s.selectIntolerance,
		s.recipeQuery,
	]);

	return (
		<Stack marginBottom={5}>
			<CheckboxGroup>
				<Heading paddingY={3} fontSize='md'>
					Intolerances:{' '}
				</Heading>
				<SimpleGrid columns={{ sm: 2, lg: 3 }} spacing={2}>
					{intoleranceOptions.map((option) => (
						<GridItem key={option.value}>
							<Checkbox
								isChecked={recipeQuery.intolerances?.includes(option.value)}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									selectIntolerance(option.value, e.target.checked)
								}
							>
								{option.label}
							</Checkbox>
						</GridItem>
					))}
				</SimpleGrid>
			</CheckboxGroup>
		</Stack>
	);
};
export default ExcludeIngredientsPanel;
