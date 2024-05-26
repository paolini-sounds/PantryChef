import { useState } from 'react';
import cuid from 'cuid';

interface Param {
	id: string;
	name: string;
}

export interface RecipeQuery {
	pageSize: number;
	ingredients?: Param[];
	intolerances?: string[];
	excludeParams?: Param[];
	diets?: string[];
}

export const dietOptions = [
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

export const intoleranceOptions = [
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

const useQueryParams = () => {
	const [recipeQuery, setRecipeQuery] = useState<RecipeQuery>(
		{} as RecipeQuery
	);

	const addIngredient = (name: string) => {
		const newIngredient: Param = {
			id: cuid(),
			name,
		};
		setRecipeQuery({
			...recipeQuery,
			ingredients: recipeQuery.ingredients?.length
				? [...recipeQuery.ingredients, newIngredient]
				: [newIngredient],
		});
	};

	const removeIngredient = (id: string) => {
		setRecipeQuery({
			...recipeQuery,
			ingredients: recipeQuery.ingredients?.filter(
				(ingredient) => ingredient.id !== id
			),
		});
	};

	const handleSelectIntolerance = (value: string, isChecked: boolean) => {
		if (isChecked) {
			setRecipeQuery({
				...recipeQuery,
				intolerances: recipeQuery.intolerances?.length
					? [...recipeQuery.intolerances, value]
					: [value],
			});
		} else {
			setRecipeQuery({
				...recipeQuery,
				intolerances: recipeQuery.intolerances?.filter(
					(intolerance) => intolerance !== value
				),
			});
		}
	};

	const handleSelectDiet = (value: string, isChecked: boolean) => {
		if (isChecked) {
			setRecipeQuery({
				...recipeQuery,
				diets: recipeQuery.diets?.length
					? [...recipeQuery.diets, value]
					: [value],
			});
		} else {
			setRecipeQuery({
				...recipeQuery,
				diets: recipeQuery.diets?.filter(
					(intolerance) => intolerance !== value
				),
			});
		}
	};

	return {
		recipeQuery,
		setRecipeQuery,
		addIngredient,
		removeIngredient,
		handleSelectIntolerance,
		handleSelectDiet,
	};
};

export default useQueryParams;
