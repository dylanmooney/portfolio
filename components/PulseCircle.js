import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1); opacity: 0.1}
  25% { transform: scale(1.01); opacity: 0.05}
  50% { transform: scale(1.02); opacity: 0.1}
  75% { transform: scale(1.01); opacity: 0.05}
  100% { transform: scale(1); opacity: 0.1}
`;

const animation = `${animationKeyframes} 10s infinite ease-in-out`;

export const PulseCircle = ({
	bgGradient = 'radial(circle, strawberry, sunset)',
	delay = '0s',
	...props
}) => {
	const animation = `${animationKeyframes} 10s infinite ease-in-out ${delay}`;

	return (
		<Box
			as={motion.div}
			w='400px'
			animation={animation}
			h='400px'
			top='100px'
			left='75px'
			bgGradient={bgGradient}
			borderRadius='full'
			sx={{ filter: 'blur(30px)' }}
			opacity='0.1'
			pos='absolute'
			{...props}></Box>
	);
};
