import { Button, useBreakpointValue, forwardRef } from '@chakra-ui/react';

export const ResponsiveButton = forwardRef(({ children, ...props }, ref) => (
	<Button
		size={useBreakpointValue({ base: 'md', lg: 'lg' })}
		ref={ref}
		{...props}>
		{children}
	</Button>
));
