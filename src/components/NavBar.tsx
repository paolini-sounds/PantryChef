import { Button, Flex, HStack, Stack } from '@chakra-ui/react';
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
		<Stack paddingX={2}>
			<Flex
				direction='column'
				justifyContent='center'
				alignItems='center'
				paddingTop={10}
			>
				<SearchInput onSearch={onSearch} />
				<IncludeIngredientsList
					removeIngredient={removeIngredient}
					recipeQuery={recipeQuery}
				/>
			</Flex>
			<Flex width='100%'>
				<Button ref={btnRef} variant='link' onClick={onOpen}>
					Options
					<MdOutlineKeyboardArrowRight size='25px' />
					{/* <LuArrowRightFromLine size='25px' /> */}
				</Button>
			</Flex>
		</Stack>
	);
};

export default NavBar;
