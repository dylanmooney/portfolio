import { ListItem } from '@chakra-ui/react';
import { ScrollLink } from '../ScrollLink';

export const NavItem = ({ to, text, ...props }) => (
	<ListItem {...props} cursor='pointer'>
		<ScrollLink to={to}>{text}</ScrollLink>
	</ListItem>
);
