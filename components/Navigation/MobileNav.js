import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	VStack,
	StackDivider,
} from '@chakra-ui/react';
import { useScroll } from '../../hooks/useScroll';

import { Events } from 'react-scroll';
import { useEffect } from 'react';

export const MobileNav = ({ isOpen, onClose, routes }) => {
	const scroll = useScroll();

	useEffect(() => {
		Events.scrollEvent.register('end', () => {
			if (isOpen) onClose();
		});

		return () => Events.scrollEvent.remove('end');
	}, [isOpen, onClose]);

	return (
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			display={{ lg: 'hidden' }}>
			<DrawerOverlay />
			<DrawerContent zIndex='100000' position='relative' bg='gray.900'>
				<DrawerCloseButton size='lg' color='gray.300' />
				<DrawerHeader />
				<DrawerBody mt='4'>
					<VStack
						w='full'
						justifyContent='stretch'
						divider={<StackDivider borderColor='gray.800' />}>
						{routes.map(({ to, text }, idx) => (
							<Button
								as='a'
								href={`#${to}`}
								key={idx}
								w='full'
								variant='ghost'
								size='lg'
								color='gray.200'
								onClick={() => scroll.to(to)}>
								{text}
							</Button>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
