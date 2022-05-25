import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

// TODO: Chakra component

const Guideline = ({ isDashed, ...props }) =>
	isDashed ? (
		<GridItem
			h='100%'
			w='1px'
			bgGradient='linear(180deg, gray.800, gray.800 50%, transparent 0, transparent)'
			bgSize='1px 8px'
			opacity={0.8}
			{...props}
		/>
	) : (
		<GridItem h='100%' w='1px' bgColor='gray.800' opacity={0.8} {...props} />
	);

export const GuidelineGrid = ({ ...props }) => (
	<Grid
		templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
		pos='absolute'
		zIndex={-1}
		w='full'
		maxW='container.xl'
		minH='100%'
		top='0'
		left='50%'
		translateX='-50%'
		transform='auto'
		aria-hidden='true'
		pointerEvents='none'
		{...props}>
		{Array(useBreakpointValue({ base: 3, lg: 5 }))
			.fill()
			.map((_, idx, { length }) => {
				// First Guidlines
				if (idx === 0) return <Guideline key={idx} />;
				// Middle Guidline
				if (idx !== length - 1) return <Guideline key={idx} isDashed />;
				// Last Guidline
				return <Guideline key={idx} colStart={-1} />;
			})}
	</Grid>
);
