import { ListItem } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { useScroll } from '../../hooks/useScroll';

export const NavItem = ({ to, text, ...props }) => {
	const scroll = useScroll();

	return (
		<ListItem {...props} cursor='pointer'>
			<Link
				href={`#${to}`}
				onClick={() => scroll.to(to)}
				_hover={{ textDecoration: 'none' }}>
				{text}
			</Link>
		</ListItem>
	);
};
