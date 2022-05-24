import { IconButton, useBreakpointValue } from '@chakra-ui/react';

export const SocialLink = ({ icon, label, href }) => (
	<IconButton
		as='a'
		href={href}
		target='_blank'
		variant='ghost'
		size={useBreakpointValue({ xl: 'md', '2xl': 'lg' })}
		icon={icon}
		aria-label={label}
		borderRadius='none'
	/>
);
