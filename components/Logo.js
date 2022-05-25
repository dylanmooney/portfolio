import { Image } from '@chakra-ui/react';

export const Logo = ({ ...props }) => (
	<Image
		src='/images/logo.svg'
		w={{ base: '12', lg: '16' }}
		alt='Dylan Mooney - Web Developer'
		{...props}
	/>
);
