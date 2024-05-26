import { Button, HStack, Stack } from '@chakra-ui/react';
import SearchInput from './SearchInput';

import IncludeIngredientsList from './filterPanel/IncludeIngredientsList';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RecipeQuery } from '../hooks/useQueryParams';

interface Props {
	onSearch: (searchText: string) => void;
	removeIngredient: (id: string) => void;
	recipeQuery: RecipeQuery;
	onOpen: () => void;
	btnRef: React.RefObject<HTMLButtonElement>;
}

const NavBar = ({
	onSearch,
	removeIngredient,
	recipeQuery,
	onOpen,
	btnRef,
}: Props) => {
	return (
		<HStack paddingX={2}>
			<Button ref={btnRef} variant='link' onClick={onOpen}>
				Options
				<MdOutlineKeyboardArrowRight size='25px' />
				{/* <LuArrowRightFromLine size='25px' /> */}
			</Button>
			<Stack
				paddingLeft={5}
				paddingY={10}
				width='60%'
				margin='auto'
				justifyContent='center'
			>
				<SearchInput onSearch={onSearch} />

				<IncludeIngredientsList
					removeIngredient={removeIngredient}
					recipeQuery={recipeQuery}
				/>
			</Stack>
		</HStack>
	);
};

export default NavBar;
