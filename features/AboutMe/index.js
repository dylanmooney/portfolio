import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import { GuidelineGrid } from '../../components/GuideLineGrid';
import { Overlay } from '../../components/Overlay';
import { Skills } from './Skills';
import { about, skills } from './data';

export const AboutMe = () => (
	<Box clipPath='polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)'>
		<Overlay zIndex={-10} />
		<Container variant='section' py={{ xl: '32' }} pos='relative'>
			<Box as='h2' textStyle='h2'>
				About Me
			</Box>

			<Flex gap={7} justifyContent='space-between'>
				<Box flex={1}>
					{about.map((text, idx) => (
						<Text key={idx} textStyle='p'>
							{text}
						</Text>
					))}
				</Box>

				<Box flex={1}>
					<Skills skills={skills} />
				</Box>
			</Flex>
		</Container>
	</Box>
);
