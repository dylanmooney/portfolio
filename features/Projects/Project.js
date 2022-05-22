import {
	Badge,
	Box,
	Button,
	Heading,
	HStack,
	Text,
	chakra,
	Wrap,
	WrapItem,
	useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ResponsiveButton } from '../../components/ResponsiveButton';

export const Project = ({ project, flipped = true }) => {
	const { title, description, technologies, projectUrl, sourceUrl, imageUrl } =
		project;

	return (
		<Box
			display={{ lg: 'flex' }}
			flexDir={!flipped && 'row-reverse'}
			_notLast={{ mb: { lg: 24 } }}>
			<ProjectImage src={imageUrl} alt='hello there' flipped={flipped} />
			<ProjectDetails
				title={title}
				description={description}
				technologies={technologies}
				projectUrl={projectUrl}
				sourceUrl={sourceUrl}
				flipped={flipped}
			/>
		</Box>
	);
};

const ChakraNextImage = chakra(Image);

const ProjectImage = ({ src, alt, flipped }) => {
	const maskImage = useBreakpointValue({
		base: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 66%, rgba(0, 0, 0, 0) 100%)`,
		lg: `linear-gradient(${
			flipped ? 'to right' : 'to left'
		}, rgba(0, 0, 0, 1) 66%, rgba(0, 0, 0, 0) 100%)`,
	});

	return (
		<Box
			as='figure'
			height={{ base: '64', md: 'sm', lg: 'md' }}
			pos='relative'
			flex={1}>
			<ChakraNextImage
				sx={{ maskImage }}
				src={src}
				alt={alt}
				layout='fill'
				objectFit='cover'
				objectPosition='top'
				borderRadius='md'
				boxShadow='md'
			/>
		</Box>
	);
};

const ProjectDetails = ({
	title,
	description,
	technologies,
	projectUrl,
	sourceUrl,
	flipped,
}) => {
	const ml = useBreakpointValue({ lg: flipped && '-56' });
	const mr = useBreakpointValue({ lg: !flipped && '-56' });

	return (
		<Box
			mt={{ base: '-8', lg: 6, xl: 12 }}
			mb={{ base: '12', lg: 0 }}
			ml={ml}
			mr={mr}
			flex={1}
			pos='relative'>
			<Box
				bg='gray.900'
				bgImage='/images/hexagons.svg'
				p={{ base: '8' }}
				pt={{ base: '6' }}
				borderRadius='md'
				boxShadow='xl'
				mb='8'>
				<Box as='h3' textStyle='h3'>
					{title}
				</Box>
				<Text mb={{ '2xl': '8' }} textStyle='p'>
					{description}
				</Text>
				<Wrap spacing='3'>
					{technologies.map((tech) => (
						<WrapItem key={tech}>
							<Badge
								bgGradient='linear(to-tr, strawberry, sunset)'
								color='gray.100'
								textShadow='1px 1px 1px rgba(0,0,0,0.4)'>
								{tech}
							</Badge>
						</WrapItem>
					))}
				</Wrap>
			</Box>
			<HStack
				spacing='4'
				justifyContent={{ base: 'end', lg: flipped ? 'end' : 'start' }}>
				<Link href={projectUrl} passHref>
					<ResponsiveButton
						as='a'
						target='_blank'
						variant='gradient'
						rightIcon={<FiExternalLink />}>
						View Project
					</ResponsiveButton>
				</Link>
				<Link href={sourceUrl} passHref>
					<ResponsiveButton
						as='a'
						target='_blank'
						variant='gradient'
						from='mint'
						to='air'
						rightIcon={<FiGithub />}>
						Source Code
					</ResponsiveButton>
				</Link>
			</HStack>
		</Box>
	);
};
