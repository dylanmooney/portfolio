export const Card = {
	baseStyle: {
		card: {
			boxShadow: {
				base: 'md',
				lg: 'lg',
			},
			rounded: 'md',
			bg: '#14161F',
			bgImage: '/images/hexagons.svg',
			overflow: 'hidden',
			figure: {
				position: 'relative',
				w: 'full',
				h: {
					base: '2xs',
					sm: 'xs',
					md: 'xs',
				},
			},
			img: {
				objectFit: 'cover',
				objectPosition: 'top',
			},
		},
		body: {
			py: {
				base: 6,
				xl: 7,
			},
			pb: {
				base: 8,
				xl: 9,
			},
			px: {
				base: 6,
				xl: 8,
			},
			p: {
				textStyle: 'p',
			},
		},
		title: {
			textStyle: 'h3',
			marginBottom: {
				base: 2,
			},
			textTransform: 'capitalize',
		},
	},
	parts: ['card', 'body', 'title'],
};
