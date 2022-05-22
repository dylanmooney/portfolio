import { Box } from '@chakra-ui/react';

export const Overlay = ({ ...props }) => (
	<Box
		pos='absolute'
		top='0'
		left='0'
		w='full'
		h='full'
		bgColor='#000000'
		opacity='0.3'
		zIndex='overlay'
		{...props}
	/>
);
