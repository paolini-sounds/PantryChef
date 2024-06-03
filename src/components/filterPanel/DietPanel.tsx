import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';
import useRecipeQueryStore from '../../stores/recipeQueryStore';

const DietPanel = () => {
	const dietOptions = [
		{ value: 'glutenfree', label: 'Gluten Free' },
		{ value: 'ketogenic', label: 'Ketogenic' },
		{ value: 'vegetarian', label: 'Vegetarian' },
		{ value: 'lacto-vegetarioan', label: 'Lacto-Vegetarian' },
		{ value: 'ovo-vegetarian', label: 'Ovo-Vegetarian' },
		{ value: 'vegan', label: 'Vegan' },
		{ value: 'pescetarian', label: 'Pescetarian' },
		{ value: 'paleo', label: 'Paleo' },
		{ value: 'primal', label: 'Primal' },
		{ value: 'low-fodmap', label: 'Low FODMAP' },
		{ value: 'whole30', label: 'Whole30' },
	];
	const [selectDiet, recipeQuery] = useRecipeQueryStore((s) => [
		s.selectDiet,
		s.recipeQuery,
	]);

	return (
		<CheckboxGroup>
			<Heading paddingY={3} fontSize='md'>
				Diet Options:{' '}
			</Heading>
			<SimpleGrid columns={{ sm: 2 }} spacing={2}>
				{dietOptions.map((option) => (
					<GridItem key={option.value}>
						<Checkbox
							isChecked={recipeQuery.diets?.includes(option.value)}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								selectDiet(option.value, e.target.checked);
							}}
						>
							{option.label}
						</Checkbox>
					</GridItem>
				))}
			</SimpleGrid>
		</CheckboxGroup>
	);
};
export default DietPanel;
