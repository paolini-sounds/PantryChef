import cuid from 'cuid';

interface Ingredient {
	id: string;
	name: string;
}

export interface RecipeQuery {
	pageSize: number;
	ingredients?: Ingredient[];
	intolerances?: string[];
	excludeParams?: Ingredient[];
	diets?: string[];
}

interface AddIngredient {
	type: 'ADD_INGREDIENT';
	name: string;
}

interface DeleteIngredient {
	type: 'DELETE_INGREDIENT';
	id: string;
}

interface SelectIntolerance {
	type: 'SELECT_INTOLERANCE';
	value: string;
	isChecked: boolean;
}

interface SelectDiet {
	type: 'SELECT_DIET';
	value: string;
	isChecked: boolean;
}

type QueryAction =
	| AddIngredient
	| DeleteIngredient
	| SelectIntolerance
	| SelectDiet;

const queryReducer = (
	recipeQuery: RecipeQuery,
	action: QueryAction
): RecipeQuery => {
	switch (action.type) {
		case 'ADD_INGREDIENT':
			const newIngredient: Ingredient = {
				id: cuid(),
				name: action.name,
			};
			return {
				...recipeQuery,
				ingredients: recipeQuery.ingredients?.length // Add to array if already exists
					? [...recipeQuery.ingredients, newIngredient]
					: [newIngredient], // Create new array with new ingredient
			};

		case 'DELETE_INGREDIENT':
			return {
				...recipeQuery,
				ingredients: recipeQuery.ingredients?.filter(
					(ingredient) => ingredient.id !== action.id
				),
			};

		case 'SELECT_INTOLERANCE':
			if (action.isChecked) {
				return {
					...recipeQuery,
					intolerances: recipeQuery.intolerances?.length
						? [...recipeQuery.intolerances, action.value]
						: [action.value],
				};
			} else {
				return {
					...recipeQuery,
					intolerances: recipeQuery.intolerances?.filter(
						(intolerance) => intolerance !== action.value
					),
				};
			}
		case 'SELECT_DIET':
			if (action.isChecked) {
				return {
					...recipeQuery,
					diets: recipeQuery.diets?.length
						? [...recipeQuery.diets, action.value]
						: [action.value],
				};
			} else {
				return {
					...recipeQuery,
					diets: recipeQuery.diets?.filter(
						(intolerance) => intolerance !== action.value
					),
				};
			}
	}
};

export default queryReducer;
