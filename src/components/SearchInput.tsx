import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { useContext, useRef } from 'react';
import { FcSearch } from 'react-icons/fc';
import { QueryContext } from './contexts/QueryProvider';

const SearchInput = () => {
	const { dispatch } = useContext(QueryContext);

	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					dispatch({ type: 'ADD_INGREDIENT', name: ref.current.value });
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
