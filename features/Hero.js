import {
	Box,
	Container,
	Heading,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { Bounce } from '../animations/Bounce';
import { GuidelineGrid } from '../components/GuideLineGrid';
import { ResponsiveButton } from '../components/ResponsiveButton';

export const Hero = () => (
	<Container
		variant='section'
		h={{ xl: '95vh' }}
		display='flex'
		flexDirection='column'>
		<GuidelineGrid />

		<Box pt={{ base: 40, xl: 0 }} pb={{ base: 16, xl: 0 }} my='auto'>
			<Heading mb={{ base: 4, md: 6, lg: 8 }} as='h1'>
				<Text textStyle='caption'>Hello, my name is</Text>
				<Box textStyle='h1'>Dylan Mooney</Box>
				<Box textStyle='h1' color='gray.400' fontWeight='semibold'>
					I build experiences for the web.
				</Box>
			</Heading>
			<ResponsiveButton as='a' href='#projects' variant='gradient'>
				View Projects
			</ResponsiveButton>
		</Box>

		<Bounce textAlign='center'>
			<IconButton
				variant='ghost'
				size='xl'
				icon={<Icon as={BiChevronDown} w={8} h={8} />}
			/>
		</Bounce>
	</Container>
);
