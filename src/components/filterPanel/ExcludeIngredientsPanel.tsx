import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { intoleranceOptions } from '../../hooks/useQueryParams';

interface Props {
	onSelectIntolerance: (intolerance: string, isChecked: boolean) => void;
}

const ExcludeIngredientsPanel = ({ onSelectIntolerance }: Props) => {
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
									onSelectIntolerance(option.value, e.target.checked)
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
