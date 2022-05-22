import { extendTheme, theme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const styles = {
	global: {
		body: {
			backgroundColor: 'gray.900',
		},
	},
};

const fonts = {
	heading: 'Source Sans Pro, sans-serif',
	body: 'Source Sans Pro, sans-serif',
};

const colors = {
	strawberry: '#F54B64',
	strawberryDark: '#f21b3a',
	sunset: '#F78361',
	sunsetDark: '#f56a41',
	mint: '#007adf',
	air: '#00ecbc',
};

const Button = {
	baseStyle: {
		fontWeight: 'semibold',
	},
	variants: {
		primary: {
			border: '2px solid transparent',
			bg: `linear-gradient(#171923, #171923) padding-box, linear-gradient(to top right, ${colors.strawberry}, ${colors.sunset}) border-box`,
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
				bg: `linear-gradient(to right, ${colors.strawberry}, ${colors.sunset})`,
				transitionProperty: 'var(--chakra-transition-property-common)',
				'transition-duration': 'var(--chakra-transition-duration-normal)',
				opacity: 0,
				zIndex: -1,
			},
			_hover: {
				_before: {
					opacity: 1,
				},
			},
		},
		gradient: (props) => {
			const {
				direction = 'to top right',
				from = 'strawberry',
				to = 'sunset',
				defaultBg = '#171923',
			} = props;

			return {
				border: '2px solid transparent',
				bg: `linear-gradient(${defaultBg}, ${defaultBg}) padding-box, linear-gradient(${direction}, ${colors[from]}, ${colors[to]}) border-box`,
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
					bg: `linear-gradient(${direction}, ${colors[from]}, ${colors[to]})`,
					transitionProperty: 'var(--chakra-transition-property-common)',
					'transition-duration': 'var(--chakra-transition-duration-normal)',
					opacity: 0,
					zIndex: -1,
				},
				_hover: {
					_before: {
						opacity: 1,
					},
				},
			};
		},
	},
};

const Text = {
	variants: {
		subtitle: {
			letterSpacing: 'wide',
			fontFamily: 'Source Sans Pro',
			fontWeight: 'semibold',
			bgGradient: 'linear(to-tr, strawberry, sunset)',
			bgClip: 'text',
		},
		copy: {
			color: 'gray.400',
			lineHeight: '200%',
			mb: '4',
			fontSize: 'lg',
		},
	},
};

const Heading = {
	variants: {
		divider: {
			display: 'flex',
			alignItems: 'center',
			w: 'full',
			fontSize: 'xl',
			_before: {
				content: "''",
				top: 0,
				left: 0,
				height: '1px',
				width: '24px',
				bgGradient:
					'linear(90deg, gray.800, gray.800 50%, transparent 0, transparent)',
				bgSize: '8px 1px',
				pos: 'relative',
				marginRight: '8px',
				display: 'block',
			},
			_after: {
				content: "''",
				top: 0,
				right: 0,
				height: '1px',
				flex: 1,
				bgGradient:
					'linear(90deg, gray.800, gray.800 50%, transparent 0, transparent)',
				bgSize: '8px 1px',
				pos: 'relative',
				marginLeft: '8px',
				display: 'block',
			},
		},
	},
};

const Box = {
	variants: {
		overlay: {
			_after: {
				content: "''",
				pos: 'absolute',
				top: 0,
				bgColor: 'black',
				left: 0,
				width: '100%',
				height: '100%',
				opacity: 0.3,
				zIndex: '-1',
			},
		},
	},
};

export default extendTheme({
	config,
	styles,
	fonts,
	colors,
	components: { Button, Text, Heading, Box },
});
