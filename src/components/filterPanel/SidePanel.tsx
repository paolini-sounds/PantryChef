import {
	Box,
	Heading,
	Flex,
	Tag,
	TagLabel,
	TagCloseButton,
} from '@chakra-ui/react';
import { RecipeQuery } from '../../App';
import IncludeIngredientsPanel from './IncludeIngredientsPanel';

interface Props {
	recipeQuery: RecipeQuery;
}

const SidePanel = ({ recipeQuery }: Props) => {
	return (
		<Box
			border='1px solid black'
			width='100%'
			height={{ sm: '25vh', lg: '75vh' }}
		>
			<Heading padding={5} fontSize='xl'>
				Filters:
			</Heading>

			<Flex
				padding={5}
				width='100%'
				justifyContent='space-between'
				flexDirection={{ sm: 'row', lg: 'column' }}
			>
				<IncludeIngredientsPanel recipeQuery={recipeQuery} />
				<Box
					height={{ sm: '100%', lg: '35%' }}
					width={{ sm: '35%', lg: '100%' }}
				>
					<Heading paddingY={3} fontSize='lg'>
						Intolerances:{' '}
					</Heading>
					{recipeQuery.intolerances &&
						recipeQuery.intolerances.map((restriction) => (
							<Tag>{restriction}</Tag>
						))}
				</Box>
			</Flex>
		</Box>
	);
};

export default SidePanel;
