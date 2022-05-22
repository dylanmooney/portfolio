import { ChakraBox } from './ChakraBox';

export const Bounce = ({ children, ...props }) => (
	<ChakraBox
		{...props}
		animate={{ translateY: 10 }}
		transition={{
			duration: 1,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'mirror',
		}}>
		{children}
	</ChakraBox>
);
