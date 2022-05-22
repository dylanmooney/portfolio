import { ListItem } from '@chakra-ui/react';

export const NavItem = ({ href, text, ...props }) => (
	<ListItem {...props}>
		<a href={href}>{text}</a>
	</ListItem>
);
