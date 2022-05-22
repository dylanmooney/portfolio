import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

const Guideline = ({ isDashed, ...props }) => {
	if (!isDashed) {
		return (
			<GridItem h='100%' w='1px' bgColor='gray.800' opacity={0.8} {...props} />
		);
	}

	return (
		<GridItem
			h='100%'
			w='1px'
			bgGradient='linear(180deg, gray.800, gray.800 50%, transparent 0, transparent)'
			bgSize='1px 8px'
			opacity={0.8}
			{...props}
		/>
	);
};

export const GuidelineGrid = ({ columns = 4, guidelineProps, ...props }) => {
	const numberOfLines = useBreakpointValue({ base: 3, lg: 5 });

	const guidelines = Array(numberOfLines)
		.fill()
		.map((_, idx) => {
			if (idx === 0) {
				return <Guideline key={idx} {...guidelineProps} />;
			}

			if (idx === numberOfLines - 1) {
				return (
					<Guideline key={idx} colStart={numberOfLines} {...guidelineProps} />
				);
			}

			return <Guideline key={idx} isDashed {...guidelineProps} />;
		});

	return (
		<Grid
			aria-hidden='true'
			pointerEvents='none'
			pos='absolute'
			zIndex={-1}
			w='full'
			templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
			maxW='container.xl'
			minH='100%'
			top='0'
			left='50%'
			transform='auto'
			translateX='-50%'
			{...props}>
			{guidelines}
		</Grid>
	);
};
