import {
	Box,
	Button,
	Container,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import { Overlay } from '../../components/Overlay';
import { ResponsiveButton } from '../../components/ResponsiveButton';

import { Element } from 'react-scroll';

export const Contact = () => (
	<Element id='contact'>
		<Box pos='relative' zIndex='40'>
			<Overlay zIndex={-1} />
			<Container
				variant='section'
				py={{ base: 16, md: 20, lg: 24, xl: 28, '2xl': 32 }}>
				<Box as='h2' textStyle='h2'>
					Get In Touch
				</Box>
				<Container textAlign='center' maxW='container.md'>
					<Text textStyle='p' mb={8}>
						Thanks for taking the time to visit my site. If you’d like to chat
						about job opportunities, web development, or anything at all, feel
						free to send me an email. I’ll get back to you as soon as I can.
					</Text>
					<ResponsiveButton
						as='a'
						href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;%64%79%6C%61%6E%40%64%79%6C%61%6D%6F%6F%6E%65%79%2E%63%6F%2E%75%6B'
						variant='gradient'
						rightIcon={<FiMail />}
						defaultbg='#101219'>
						Contact Me
					</ResponsiveButton>
				</Container>
			</Container>
		</Box>
	</Element>
);
