import { extendTheme } from '@chakra-ui/react';

// Theme configuration
import { config, styles } from './base';

// Foundational style overrides
import { colors, fonts, textStyles } from './foundations';

// Component style overrides
import { Button, Container, Card, Badge } from './components';

const overrides = {
	config,
	styles,
	colors,
	fonts,
	textStyles,
	components: {
		Button,
		Container,
		Card,
		Badge,
	},
};

export default extendTheme(overrides);
