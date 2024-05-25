import { Button } from '@chakra-ui/react';

interface Props {
	children: string;
	onClick: () => void;
	disabled?: boolean;
}

const CustomButton = ({ children, onClick, disabled }: Props) => {
	return (
		<Button
			bg='brand.800'
			color='brand.50'
			_hover={{ bg: 'brand.700', color: 'brand.50' }}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
