export const Badge = {
	baseStyle: ({ theme }) => ({
		background: 'unset',
		bgGradient: `linear(to-tr, ${theme.colors.strawberry}, ${theme.colors.sunset})`,
		textShadow: '1px 1px 1px rgba(0,0,0,0.2)',
	}),
	defaultProps: { colorScheme: 'gray', variant: 'solid' },
};
