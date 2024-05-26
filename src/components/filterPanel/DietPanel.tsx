import {
	Checkbox,
	CheckboxGroup,
	GridItem,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';
import { dietOptions } from '../../hooks/useQueryParams';

interface Props {
	onSelectDiet: (intolerance: string, isChecked: boolean) => void;
}

const DietPanel = ({ onSelectDiet }: Props) => {
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
								onSelectDiet(option.value, e.target.checked)
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
