import { Image } from '@chakra-ui/react';

export const Logo = ({ ...props }) => (
	<Image
		src='/images/logo.svg'
		alt='Dylan Mooney web developer'
		w={{ base: '40', md: '48' }}
		{...props}
	/>
);
