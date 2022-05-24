import { Link } from 'react-scroll';
import { forwardRef } from '@chakra-ui/react';

export const ScrollLink = forwardRef(({ children, ...props }, ref) => (
	<Link
		p={1}
		smooth={true}
		duration={500}
		ignoreCancelEvents={false}
		spyThrottle={500}
		{...props}
		ref={ref}>
		{children}
	</Link>
));
