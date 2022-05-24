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
import { ScrollLink } from '../ScrollLink';

export const MobileNav = ({ isOpen, onClose, routes }) => {
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
							<ScrollLink key={idx} to={to} style={{ width: '100%' }}>
								<Button
									w='full'
									variant='ghost'
									size='lg'
									color='gray.200'
									onClick={() => setTimeout(onClose, 500)}>
									{text}
								</Button>
							</ScrollLink>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
