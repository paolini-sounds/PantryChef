import { Box, Heading } from '@chakra-ui/react';

const SidePanel = () => {
	return (
		<Box bg='brand.100' width='100%' height={{ sm: '100%', lg: '75vh' }}>
			<Heading fontSize='xl'>Filters:</Heading>
		</Box>
	);
};

export default SidePanel;
