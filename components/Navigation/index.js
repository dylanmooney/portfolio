import {
	Box,
	Container,
	Icon,
	IconButton,
	Image,
	useDisclosure,
} from '@chakra-ui/react';
import { NavList } from './NavList';
import { routes } from './routes';
import { useMemo } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

import { FiMenu } from 'react-icons/fi';
import { MobileNav } from './MobileNav';
import { ChakraBox } from '../../animations/ChakraBox';

const variants = {
	initial: {
		opacity: 1,
		background: 'rgba(23, 25, 35, 0)',
		y: 0,
		boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)',
	},
	visible: {
		opacity: 1,
		background: 'rgba(23, 25, 35, 1)',
		y: 0,
		boxShadow:
			'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
	},
	hidden: {
		opacity: 0,
		y: -115,
	},
};

export const Navigation = () => {
	const direction = useScrollDirection();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const animate = useMemo(() => {
		if (!direction) {
			return 'initial';
		}

		return direction === 'up' ? 'visible' : 'hidden';
	}, [direction]);

	return (
		<>
			<ChakraBox
				zIndex='overlay'
				w='full'
				pos='fixed'
				variants={variants}
				initial='initial'
				animate={animate}
				transition={{ type: 'tween', duration: 0.3 }}>
				<Container
					display='flex'
					maxW='container.xl'
					mx='auto'
					justifyContent='space-between'
					px={{ base: '4', sm: '12', '2xl': '4' }}
					py={{ base: '4', sm: '6', lg: '8' }}>
					<Image
						src='/images/updated-logo.svg'
						w={{ base: '12', lg: '16' }}
						alt='Dylan Mooney - Web Developer'
					/>

					<Box display={{ lg: 'none' }}>
						<IconButton
							aria-label='Open navigation'
							size='lg'
							icon={<Icon as={FiMenu} w={6} h={6} />}
							variant='ghost'
							onClick={onOpen}
						/>
					</Box>

					<NavList routes={routes} />
				</Container>
			</ChakraBox>
			<MobileNav
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				routes={routes}
			/>
		</>
	);
};
