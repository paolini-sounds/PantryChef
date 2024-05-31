import { Recipe } from '../hooks/useRecipes';

import { LuWheatOff, LuSalad } from 'react-icons/lu';
import { IoIosLeaf } from 'react-icons/io';
import { PiCow } from 'react-icons/pi';
import { HStack, Icon, Tag } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	recipe: Recipe;
}

const RecipeIconList = ({ recipe }: Props) => {
	const [hoverText, setText] = useState<string>('');

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
						<Icon
							key={value.text}
							as={value.icon}
							color={value.color}
							onMouseEnter={() => setText(value.text)}
							onMouseLeave={() => setText('')}
						/>
					)
			)}
			{hoverText !== '' ? <Tag>{hoverText}</Tag> : null}
		</HStack>
	);
};

export default RecipeIconList;
