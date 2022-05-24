import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	VStack,
	StackDivider,
} from '@chakra-ui/react';

import { animateScroll } from 'react-scroll/modules';

export const MobileNav = ({ isOpen, onClose, routes }) => {
	const handleNavigate = () => {
		animateScroll.scrollTo('about');
		setTimeout(onClose, 500);
	};

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
								key={idx}
								w='full'
								variant='ghost'
								size='lg'
								color='gray.200'
								onClick={handleNavigate}>
								{text}
							</Button>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
