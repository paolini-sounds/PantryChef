import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { FcSearch } from 'react-icons/fc';

interface Props {
	onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					onSearch(ref.current.value);
					ref.current.value = '';
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<FcSearch />} />
				<Input
					width={300}
					marginBottom={2}
					ref={ref}
					borderRadius={20}
					placeholder='Search ingredients...'
					variant='filled'
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
