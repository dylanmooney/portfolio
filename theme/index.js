// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Theme configuration
import { config } from './config';

// Global style overrides
import { styles } from './styles';

// Foundational style overrides
import { colors, fonts, textStyles } from './foundations';

// Component style overrides
import { Button, Container } from './components';

const overrides = {
	config,
	styles,
	colors,
	fonts,
	textStyles,
	components: {
		Button,
		Container,
	},
};

export default extendTheme(overrides);
