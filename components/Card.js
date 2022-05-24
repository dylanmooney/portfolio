import {
	Box,
	Flex,
	StylesProvider,
	useMultiStyleConfig,
	useStyles,
} from '@chakra-ui/react';

export const Card = (props) => {
	const { size, variant, children, ...rest } = props;

	const styles = useMultiStyleConfig('Card', { size, variant });

	return (
		<Flex __css={styles.card} {...rest}>
			<StylesProvider value={styles}>{children}</StylesProvider>
		</Flex>
	);
};

export const CardBody = (props) => {
	const styles = useStyles();
	return <Box __css={styles.body} {...props} />;
};

export const CardTitle = (props) => {
	const styles = useStyles();

	return <Box as='h3' __css={styles.title} {...props} />;
};
