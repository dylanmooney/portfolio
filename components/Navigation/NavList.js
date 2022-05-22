import { Button, List, ListItem } from '@chakra-ui/react';
import { BiDownload } from 'react-icons/bi';
import { NavItem } from './NavItem';

export const NavList = ({ routes }) => (
	<List
		listStyleType='none'
		display={{ base: 'none', lg: 'flex' }}
		w='min-content'
		alignItems='center'>
		{routes.map(({ href, text }) => (
			<NavItem key={text} href={href} text={text} mr={{ md: '12', lg: '20' }} />
		))}
		<ListItem>
			<Button
				variant='gradient'
				as='a'
				href='dylanmooney.pdf'
				target='_blank'
				rightIcon={<BiDownload />}>
				Download CV
			</Button>
		</ListItem>
	</List>
);
