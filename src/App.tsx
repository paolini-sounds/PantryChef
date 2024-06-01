import { Center, Flex, GridItem, useDisclosure } from '@chakra-ui/react';
import RecipeGrid from './components/RecipeGrid';
import NavBar from './components/NavBar';
import SidePanel from './components/filterPanel/SidePanel';
import { useReducer, useRef } from 'react';
import useQueryParams from './hooks/useQueryParams';
import queryReducer, { RecipeQuery } from './reducers/queryReducer';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);
	const [recipeQuery, dispatch] = useReducer(queryReducer, {} as RecipeQuery);

	return (
		<Flex direction='column' justifyContent='center'>
			<GridItem area='nav'>
				<NavBar
					btnRef={btnRef}
					onOpen={onOpen}
					recipeQuery={recipeQuery}
					removeIngredient={(id) =>
						dispatch({ type: 'DELETE_INGREDIENT', id: id })
					}
					onSearch={(searchText) =>
						dispatch({ type: 'ADD_INGREDIENT', name: searchText })
					}
				/>
			</GridItem>

			<SidePanel
				onSelectDiet={(value, isChecked) =>
					dispatch({ type: 'SELECT_DIET', value: value, isChecked: isChecked })
				}
				onSelectIntolerance={(value, isChecked) =>
					dispatch({
						type: 'SELECT_INTOLERANCE',
						value: value,
						isChecked: isChecked,
					})
				}
				btnRef={btnRef}
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				recipeQuery={recipeQuery}
			/>
			<Center width='100%'>
				<RecipeGrid recipeQuery={recipeQuery} />
			</Center>
		</Flex>
	);
}

export default App;
