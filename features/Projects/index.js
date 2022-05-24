import { Box, Container } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { Project } from './Project';
import projects from './projects.json';

export const Projects = () => (
	<Element id='projects'>
		<Container
			variant='section'
			py={{ base: 0, lg: 8 }}
			pb={{ base: 16, lg: 32 }}>
			<Box
				as='h2'
				textStyle='h2'
				textAlign='center'
				mb={{ base: 8, lg: 12 }}
				mt={{ base: 2, lg: 4 }}>
				Projects
			</Box>
			<Box w={['100%', '90%', '70%', '100%']} mx='auto'>
				{projects.map((project, idx) => (
					<Project key={idx} project={project} isReversed={idx % 2 === 1} />
				))}
			</Box>
		</Container>
	</Element>
);
