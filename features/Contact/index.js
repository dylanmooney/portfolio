import {
	Box,
	Button,
	Container,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import { Overlay } from '../../components/Overlay';

export const Contact = () => (
	<Box pos='relative' zIndex='40'>
		<Overlay zIndex={-1} />
		<Container variant='section' py={32}>
			<Box as='h2' textStyle='h2' textAlign='center'>
				Get In Touch
			</Box>
			<Container textAlign='center' maxW={['container.md']}>
				<Text textStyle='p' mb={12}>
					Thanks for taking the time to visit my site. If you’d like to chat
					about job opportunities, web development, or anything at all, feel
					free to send me an email. I’ll get back to you as soon as I can.
				</Text>
				<Button
					variant='gradient'
					rightIcon={<FiMail />}
					size={useBreakpointValue({ lg: 'lg' })}>
					Contact Me
				</Button>
			</Container>
		</Container>
	</Box>
);
