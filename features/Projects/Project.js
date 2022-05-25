import {
	Badge,
	Box,
	ButtonGroup,
	chakra,
	Flex,
	Icon,
	Text,
	useBreakpointValue,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Card, CardBody, CardTitle } from '../../components/Card';
import { ResponsiveButton } from '../../components/ResponsiveButton';

const ChakraNextImage = chakra(Image);

export const Project = ({ project, isReversed }) => {
	const { title, description, technologies, links, imageUrl } = project;

	const maskImage = useBreakpointValue({
		lg: `linear-gradient(${
			isReversed ? 'to left' : 'to right'
		}, rgba(0, 0, 0, 1) 66%, rgba(0, 0, 0, 0) 100%)`,
	});

	const cardMl = useBreakpointValue({
		lg: !isReversed && '-56',
		xl: !isReversed && '-32',
	});
	const cardMr = useBreakpointValue({
		lg: isReversed && '-56',
		xl: isReversed && '-32',
	});

	return (
		<Flex
			flexDirection={isReversed && 'row-reverse'}
			_notLast={{ mb: { base: 12, lg: 20 } }}
			mx={{ base: 'auto' }}>
			<Box
				display={{ base: 'none', lg: 'block' }}
				as='figure'
				pos='relative'
				flex={{ lg: 1.5, xl: 1.2 }}
				height={{ lg: 'sm', '2xl': 'md' }}
				borderRadius='md'
				overflow='hidden'
				boxShadow='sm'>
				<ChakraNextImage
					src={imageUrl}
					layout='fill'
					objectPosition='top'
					objectFit='cover'
					sx={{ maskImage }}
					alt={title}
				/>
			</Box>
			<Box flex={1}>
				<Card
					mb={6}
					ml={cardMl}
					mr={cardMr}
					mt={{ lg: 8 }}
					pos='relative'
					zIndex={10}>
					<Box as='figure' display={{ lg: 'none' }}>
						<ChakraNextImage src={imageUrl} layout='fill' />
					</Box>
					<CardBody>
						<CardTitle>{title}</CardTitle>
						<Text mb={{ base: 4, md: 6, xl: 7 }}>{description}</Text>
						<Wrap spacing={3}>
							{technologies.map((tech) => (
								<WrapItem key={tech}>
									<Badge>{tech}</Badge>
								</WrapItem>
							))}
						</Wrap>
					</CardBody>
				</Card>
				<ButtonGroup
					display='flex'
					justifyContent={{ base: 'flex-end', lg: isReversed && 'flex-start' }}
					variant='gradient'
					spacing={{ base: 4, lg: 6 }}>
					{links.demo && (
						<ResponsiveButton
							as='a'
							href={links.demo}
							target='_blank'
							rightIcon={<Icon as={FiExternalLink} />}>
							View Project
						</ResponsiveButton>
					)}
					{links.repo && (
						<ResponsiveButton
							as='a'
							href={links.repo}
							target='_blank'
							frombg='mint'
							tobg='air'
							rightIcon={<Icon as={FiGithub} />}>
							Source Code
						</ResponsiveButton>
					)}
				</ButtonGroup>
			</Box>
		</Flex>
	);
};
