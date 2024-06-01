import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { intoleranceOptions } from '../../hooks/useQueryParams';
import { QueryContext } from '../contexts/QueryProvider';
import { useContext } from 'react';

const ExcludeIngredientsPanel = () => {
	const { dispatch } = useContext(QueryContext);
	return (
		<Stack marginBottom={5}>
			<CheckboxGroup>
				<Heading paddingY={3} fontSize='md'>
					Intolerances:{' '}
				</Heading>
				<SimpleGrid columns={{ sm: 2, lg: 3 }} spacing={2}>
					{intoleranceOptions.map((option) => (
						<GridItem key={option.value}>
							<Checkbox
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									dispatch({
										type: 'SELECT_INTOLERANCE',
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
		</Stack>
	);
};
export default ExcludeIngredientsPanel;
