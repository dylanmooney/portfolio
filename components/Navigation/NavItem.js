import { ListItem } from '@chakra-ui/react';
import { ScrollLink } from '../ScrollLink';

export const NavItem = ({ to, text, ...props }) => (
	<ListItem {...props} cursor='pointer'>
		<ScrollLink to={to} href={to}>
			{text}
		</ScrollLink>
	</ListItem>
);
