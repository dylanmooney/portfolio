import {
	Box,
	chakra,
	Container,
	Heading,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

import { ResponsiveButton } from '../components/ResponsiveButton';
import { Bounce } from '../animations/Bounce';
import { useScroll } from '../hooks/useScroll';
import { Element } from 'react-scroll';

export const Hero = () => {
	const scroll = useScroll();

	return (
		<Element name='hero'>
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
						href='#projects'
						variant='gradient'
						aria-label='scroll down'
						onClick={() => scroll.to('projects')}>
						View Projects
					</ResponsiveButton>
				</Box>

				<Bounce textAlign='center'>
					<IconButton
						as='a'
						href='#about'
						onClick={() => scroll.to('about')}
						aria-label='scroll to about'
						variant='ghost'
						size='xl'
						icon={<Icon as={BiChevronDown} w={8} h={8} />}
					/>
				</Bounce>
			</Container>
		</Element>
	);
};
