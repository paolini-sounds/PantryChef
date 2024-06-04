import { Recipe } from '../entities/Recipe';

import { LuWheatOff, LuSalad } from 'react-icons/lu';
import { IoIosLeaf } from 'react-icons/io';
import { PiCow } from 'react-icons/pi';
import { HStack, Icon, Tooltip } from '@chakra-ui/react';

interface Props {
	recipe: Recipe;
	size?: 'sm' | 'lg';
}

const RecipeIconList = ({ recipe, size = 'sm' }: Props) => {
	const iconMap = [
		recipe.glutenFree && {
			text: 'Gluten Free',
			icon: LuWheatOff,
			color: 'maroon',
		},
		recipe.dairyFree && { text: 'Dairy Free', icon: PiCow, color: 'brown' },
		recipe.vegan && { text: 'Vegan', icon: IoIosLeaf, color: 'green' },
		!recipe.vegan &&
			recipe.vegetarian && {
				text: 'Vegetarian',
				icon: LuSalad,
				color: 'green',
			},
	];
	return (
		<HStack>
			{iconMap.map(
				(value) =>
					value && (
						<Tooltip
							hasArrow
							aria-label='A tooltip'
							bg='green.800'
							label={value.text}
							key={value.text}
						>
							<span>
								<Icon
									margin={size === 'lg' ? 2 : 0}
									// w={size === 'lg' ? 6 : 4}
									// h={size === 'lg' ? 6 : 4}

									boxSize={size === 'sm' ? 4 : 6}
									as={value.icon}
									color={value.color}
								/>
							</span>
						</Tooltip>
					)
			)}
		</HStack>
	);
};

export default RecipeIconList;
