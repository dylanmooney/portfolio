import { Box, Container, Text } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import { Element } from 'react-scroll';

import { ResponsiveButton } from '../../components/ResponsiveButton';
import { Overlay } from '../../components/Overlay';

export const Contact = () => (
	<Element id='contact'>
		<Box pos='relative' zIndex='40'>
			<Overlay zIndex={-1} />
			<Container variant='section' py={[16, null, 20, 24, 28, 32]}>
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
						href='mailto:dylan@dylanmooney.co.uk'
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
