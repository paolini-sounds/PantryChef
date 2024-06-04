interface ExtendedIngredients {
	name: string;
	id: number;
	amount: number;
	unit: string;
}

interface Step {
	number: number;
	step: string;
}

interface AnalyzedInstruction {
	name: string;
	steps: Step[];
}

export interface Recipe {
	id: number;
	title: string;
	image: string;
	readyInMinutes: number;
	servings: number;
	diets: string[];
	spoonacularScore: number;
	glutenFree: boolean;
	dairyFree: boolean;
	vegan: boolean;
	vegetarian: boolean;
	extendedIngredients: ExtendedIngredients[];
	analyzedInstructions: AnalyzedInstruction[];
}
