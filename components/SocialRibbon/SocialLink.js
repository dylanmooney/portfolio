import { IconButton, useBreakpointValue } from '@chakra-ui/react';

export const SocialLink = ({ icon, label, href }) => (
	<IconButton
		variant='ghost'
		size={useBreakpointValue({ xl: 'md', '2xl': 'lg' })}
		icon={icon}
		aria-label={label}
		href={href}
		borderRadius='none'
	/>
);
