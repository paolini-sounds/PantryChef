import { Box, Button, Heading, Text } from '@chakra-ui/react';

import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
} from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<>
			<Box padding={10}>
				<Button onClick={() => navigate('/')}>Back</Button>
				<Heading>Oops</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? 'This page does not exist.'
						: 'An unexpected error occurred. '}
				</Text>
			</Box>
		</>
	);
};

export default ErrorPage;
