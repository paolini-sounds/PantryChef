import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';
import { dietOptions } from '../../hooks/useQueryParams';
import { useContext } from 'react';
import { QueryContext } from '../contexts/QueryProvider';

const DietPanel = () => {
	const { dispatch } = useContext(QueryContext);
	return (
		<CheckboxGroup>
			<Heading paddingY={3} fontSize='md'>
				Diet Options:{' '}
			</Heading>
			<SimpleGrid columns={{ sm: 2 }} spacing={2}>
				{dietOptions.map((option) => (
					<GridItem key={option.value}>
						<Checkbox
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								dispatch({
									type: 'SELECT_DIET',
									value: option.value,
									isChecked: e.target.checked,
								})
							}
						>
							{option.label}
						</Checkbox>
					</GridItem>
				))}
			</SimpleGrid>
		</CheckboxGroup>
	);
};
export default DietPanel;
