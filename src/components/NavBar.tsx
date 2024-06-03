import { Button, Flex, Stack } from '@chakra-ui/react';
import SearchInput from './filterPanel/SearchInput';

import TagsList from './filterPanel/TagsList';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useContext } from 'react';
import DrawerContext from './filterPanel/drawerContext';

const NavBar = () => {
	const { btnRef, onOpen } = useContext(DrawerContext);

	return (
		<Stack paddingX={2}>
			<Flex
				direction='column'
				justifyContent='center'
				alignItems='center'
				paddingTop={10}
			>
				<SearchInput />
				<TagsList />
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
