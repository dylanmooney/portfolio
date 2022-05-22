import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	Button,
	VStack,
	StackDivider,
} from '@chakra-ui/react';

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
						{routes.map(({ href, text }, idx) => (
							<Button
								key={idx}
								w='full'
								variant='ghost'
								size='lg'
								href={href}
								color='gray.200'>
								{text}
							</Button>
						))}
					</VStack>
				</DrawerBody>

				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
