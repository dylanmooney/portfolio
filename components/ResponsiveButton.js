import { Button, useBreakpointValue } from '@chakra-ui/react';

export const ResponsiveButton = ({ children, ...props }) => (
	<Button size={useBreakpointValue({ base: 'md', lg: 'lg' })} {...props}>
		{children}
	</Button>
);
