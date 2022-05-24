import { theme } from '@chakra-ui/react';

export const Button = {
	baseStyle: {
		fontWeight: 'semibold',
		color: 'gray.200',
	},
	defaultProps: {},
	variants: {
		gradient: (props) => {
			const {
				direction = 'to top right',
				from = 'strawberry',
				to = 'sunset',
				defaultbg = '#171923',
			} = props;

			return {
				border: '2px solid transparent',
				bg: `linear-gradient(${defaultbg}, ${defaultbg}) padding-box, linear-gradient(${direction}, ${props.theme.colors[from]}, ${props.theme.colors[to]}) border-box`,
				transition: 'background 1s ease-in-out',
				pos: 'relative',
				zIndex: 1,
				_before: {
					position: 'absolute',
					content: '""',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					bg: `linear-gradient(${direction}, ${props.theme.colors[from]}, ${props.theme.colors[to]})`,
					transitionProperty: 'var(--chakra-transition-property-common)',
					transitionDuration: 'var(--chakra-transition-duration-normal)',
					opacity: 0,
					zIndex: -1,
				},
				_hover: {
					_before: {
						opacity: 1,
					},
				},
				size: 'xl',
			};
		},
		ghost: {
			_hover: {
				bg: 'blackAlpha.400',
			},
			_active: {
				bg: 'blackAlpha.500',
			},
			_focus: {
				bg: 'blackAlpha.500',
			},
		},
	},
};
