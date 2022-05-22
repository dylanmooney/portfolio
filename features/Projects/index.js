import {
	Box,
	Container,
	Heading,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import { Project } from './Project';

const projects = [
	{
		title: 'National Museum of Scotland',
		description:
			'MERN application for booking museum tickets. Features modern, responsive frontend with event filter and booking system that is connected to an API that handles user authentication, event booking, mock payment processing and PDF ticket generation.',
		technologies: [
			'React',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Styled Components',
			'Stripe',
		],
		imageUrl: '/images/nms.png',
		projectUrl: 'https://connectingscotland.org',
		sourceUrl: 'https://connectingscotland.org',
	},
	{
		title: 'AnimalSnap',
		description:
			'Prototype PWA that facilitates the tracking and conservation of local wildlife by allowing users to snap pictures of animals with their recent location and status. Features a modern user interface, offline persistent storage, and access to native device APIs (Camera, Location)',
		technologies: ['PHP', 'WordPress', 'ACF'],
		imageUrl: '/images/as.png',
		projectUrl: 'https://animal-snap.vercel.app',
		sourceUrl: 'https://github.com/dylanmooney62/animal-snap',
	},
	{
		title: 'Connecting scotland',
		description:
			'A freelance project built for a Community Interest Group. Bespoke design enhanced with Advanced Custom Fields for flexibility and extensibility. Automatic caching, image processing and CDN utilisation for optimal page speeds.',
		technologies: ['PHP', 'WordPress', 'ACF'],
		imageUrl: '/images/cs.png',
		projectUrl: 'https://connectingscotland.org',
		sourceUrl: 'https://connectingscotland.org',
	},
];

export const Projects = () => (
	<Container
		as='section'
		maxW='container.xl'
		mx='auto'
		px={{ base: '4', sm: '12', '2xl': '4' }}
		py={{ base: '8', lg: '16' }}
		pb={{ base: '4', md: '8', lg: '32' }}>
		<Box as='h2' textAlign='center' textStyle='h2'>
			Projects
		</Box>

		<UnorderedList display='flex' listStyleType='none' ml='0'>
			<ListItem w='full'>
				{projects.map((project, idx) => (
					<Project
						key={project.title}
						project={project}
						flipped={idx % 2 === 0}
					/>
				))}
			</ListItem>
		</UnorderedList>
	</Container>
);
