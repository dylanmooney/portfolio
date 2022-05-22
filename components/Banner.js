import { Box, Container } from '@chakra-ui/react';

export const Banner = ({ children }) => {
	return (
		<Box bgGradient='linear(to-bl, strawberry, sunset)' w='full' py='1'>
			<Container
				maxW='container.xl'
				mx='auto'
				display='flex'
				alignItems='center'
				justifyContent='center'>
				{children}
			</Container>
		</Box>
	);
};
