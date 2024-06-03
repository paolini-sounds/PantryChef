import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { FcSearch } from 'react-icons/fc';
import useRecipeQueryStore from '../../stores/recipeQueryStore';

const SearchInput = () => {
	const addIngredient = useRecipeQueryStore((s) => s.addIngredient);

	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					addIngredient(ref.current.value);
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
