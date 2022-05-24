import { Flex, VStack } from '@chakra-ui/react';
import { SocialLink } from './SocialLink';
import { socialLinks } from './socialLinks';

export const SocialRibbon = () => (
	<Flex
		display={{ base: 'none', lg: 'flex' }}
		minH='100vh'
		pos='fixed'
		left='0'
		top='0'
		dir='row'
		alignItems='flex-end'
		zIndex='overlay'>
		<VStack
			bgColor='gray.900'
			borderTop='2px solid transparent'
			borderTopRightRadius='sm'
			borderBottomRightRadius='sm'
			boxShadow='lg'
			pos='relative'
			bg='#14161F'
			mb='6'
			_after={{
				content: "''",
				pos: 'absolute',
				top: '-2px',
				width: '100%',
				height: '2px',
				bgGradient: 'linear(to right, strawberry, sunset)',
				borderTopRightRadius: 'sm',
			}}>
			{socialLinks.map((link) => (
				<SocialLink key={link.label} {...link} />
			))}
		</VStack>
	</Flex>
);
