export const Button = {
	baseStyle: {
		fontWeight: 'semibold',
		color: 'gray.200',
	},
	variants: {
		gradient: ({
			theme,
			direction = 'to top right',
			frombg = 'strawberry',
			tobg = 'sunset',
			defaultbg = '#171923',
		}) => ({
			border: '2px solid transparent',
			bg: `linear-gradient(${defaultbg}, ${defaultbg}) padding-box, linear-gradient(${direction}, ${theme.colors[frombg]}, ${theme.colors[tobg]}) border-box`,
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
				bg: `linear-gradient(${direction}, ${theme.colors[frombg]}, ${theme.colors[tobg]})`,
				transitionProperty: 'var(--chakra-transition-property-common)',
				transitionDuration: 'var(--chakra-transition-duration-normal)',
				opacity: 0,
				zIndex: -1,
			},
			_hover: {
				_before: { opacity: 1 },
			},
		}),
	},
	ghost: {
		_hover: { bg: 'blackAlpha.400' },
		_active: { bg: 'blackAlpha.500' },
		_focus: { bg: 'blackAlpha.500' },
	},
};
