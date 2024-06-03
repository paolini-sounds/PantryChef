import cuid from 'cuid';
import { create } from 'zustand';

interface Ingredient {
	id: string;
	name: string;
}

interface RecipeQuery {
	pageSize: number;
	ingredients?: Ingredient[];
	intolerances?: string[];
	excludeParams?: Ingredient[];
	diets?: string[];
}

interface RecipeQueryStore {
	recipeQuery: RecipeQuery;
	addIngredient: (inputText: string) => void;
	deleteIngredient: (id: string) => void;
	selectDiet: (value: string, isChecked: boolean) => void;
	deleteDiet: (value: string) => void;
	selectIntolerance: (value: string, isChecked: boolean) => void;
	deleteIntolerance: (value: string) => void;
	clearAll: () => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
	recipeQuery: { pageSize: 10 },
	addIngredient: (inputText) =>
		set((store) => {
			const newIngredient: Ingredient = {
				id: cuid(),
				name: inputText,
			};
			return {
				recipeQuery: {
					...store.recipeQuery,
					ingredients: store.recipeQuery.ingredients?.length // Add to array if already exists
						? [...store.recipeQuery.ingredients, newIngredient]
						: [newIngredient], // Create new array with new ingredient
				},
			};
		}),
	deleteIngredient: (id) =>
		set((store) => ({
			recipeQuery: {
				...store.recipeQuery,
				ingredients: store.recipeQuery.ingredients?.filter(
					(ingredient) => ingredient.id !== id
				),
			},
		})),
	selectIntolerance: (value, isChecked) =>
		set((store) => {
			if (isChecked)
				return {
					recipeQuery: {
						...store.recipeQuery,
						intolerances: store.recipeQuery.intolerances?.length
							? [...store.recipeQuery.intolerances, value]
							: [value],
					},
				};
			return {
				recipeQuery: {
					...store.recipeQuery,
					intolerances: store.recipeQuery.intolerances?.filter(
						(intolerance) => intolerance !== value
					),
				},
			};
		}),
	selectDiet: (value, isChecked) =>
		set((store) => {
			if (isChecked)
				return {
					recipeQuery: {
						...store.recipeQuery,
						diets: store.recipeQuery.diets?.length
							? [...store.recipeQuery.diets, value]
							: [value],
					},
				};
			return {
				recipeQuery: {
					...store.recipeQuery,
					diets: store.recipeQuery.diets?.filter((diet) => diet !== value),
				},
			};
		}),
	deleteDiet: (value) =>
		set((store) => {
			return {
				recipeQuery: {
					...store.recipeQuery,
					diets: store.recipeQuery.diets?.filter((diet) => diet !== value),
				},
			};
		}),
	deleteIntolerance: (value) =>
		set((store) => {
			return {
				recipeQuery: {
					...store.recipeQuery,
					intolerances: store.recipeQuery.intolerances?.filter(
						(intolerance) => intolerance !== value
					),
				},
			};
		}),
	clearAll: () => set(() => ({ recipeQuery: { pageSize: 10 } })),
}));

export default useRecipeQueryStore;
