import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import RecipePage from './components/RecipePage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'recipes/:id', element: <RecipePage /> },
		],
	},
]);

export default router;
