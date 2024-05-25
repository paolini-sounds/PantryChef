import { HStack } from '@chakra-ui/react';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack justifyContent='center' paddingY={10}>
			<SearchInput onSearch={onSearch} />
		</HStack>
	);
};

export default NavBar;
