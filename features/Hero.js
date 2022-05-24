import {
	Box,
	Container,
	Heading,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

import { ResponsiveButton } from '../components/ResponsiveButton';
import { Bounce } from '../animations/Bounce';
import { animateScroll } from 'react-scroll/modules';

export const Hero = () => (
	<Container
		variant='section'
		h={{ base: '80vh', xl: '95vh' }}
		display='flex'
		flexDirection='column'>
		<Box my='auto'>
			<Heading mb={{ base: 4, md: 6, lg: 8 }} as='h1'>
				<Text textStyle='caption'>Hello, my name is</Text>
				<Box textStyle='h1'>Dylan Mooney</Box>
				<Box textStyle='h1' color='gray.400' fontWeight='semibold'>
					I build experiences for the web.
				</Box>
			</Heading>

			<ResponsiveButton
				as='a'
				href='#about'
				variant='gradient'
				aria-label='scroll down'
				onClick={(e) => {
					e.preventDefault();
					animateScroll.scrollTo('projects');
				}}>
				View Projects
			</ResponsiveButton>
		</Box>

		<Bounce textAlign='center'>
			<IconButton
				onClick={(e) => {
					e.preventDefault();
					animateScroll.scrollTo('about');
				}}
				aria-label='scroll to about'
				variant='ghost'
				size='xl'
				icon={<Icon as={BiChevronDown} w={8} h={8} />}
			/>
		</Bounce>
	</Container>
);
