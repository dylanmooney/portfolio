import { Box, Icon, Text, Wrap, WrapItem } from '@chakra-ui/react';

const SVGComponent = (props) => (
	<svg
		width={24}
		height={24}
		viewBox='0 0 1 1'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path
			d='M.615.458A.34.34 0 0 0 .734.346L.705.32a.008.008 0 0 0-.013.003L.68.359a.207.207 0 0 1-.043.07.006.006 0 0 1-.004.001H.629A.006.006 0 0 1 .627.424.377.377 0 0 0 .574.227a.348.348 0 0 0-.131-.14L.403.065A.008.008 0 0 0 .39.07l.002.047a.213.213 0 0 1-.011.084.279.279 0 0 1-.092.124.344.344 0 0 0-.134.27.336.336 0 0 0 .21.314.344.344 0 0 0 .449-.452ZM.696.79A.277.277 0 0 1 .5.87.277.277 0 0 1 .223.596.27.27 0 0 1 .33.379a.341.341 0 0 0 .126-.2.296.296 0 0 1 .06.08.312.312 0 0 1 .044.16.072.072 0 0 0 .126.054A.32.32 0 0 0 .72.428a.27.27 0 0 1 .057.168.271.271 0 0 1-.08.194Z'
			fill='url(#a)'
		/>
		<defs>
			<linearGradient
				id='a'
				x1={0}
				y1={1}
				x2={1}
				y2={0}
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#F54B64' />
				<stop offset={1} stopColor='#F78361' />
			</linearGradient>
		</defs>
	</svg>
);

export const Skills = ({ skills }) =>
	skills.map(({ title, items }) => (
		<Box key={title} _notLast={{ mb: 8 }}>
			<Box as='h4' textStyle='h4'>
				{title}
			</Box>
			<Wrap
				display='flex'
				spacingX='7'
				spacingY={{ base: '4', xl: '6' }}
				px='2'>
				{items.map((item) => (
					<WrapItem key={item} fontSize='xl' alignItems='center'>
						<Icon w={{ base: '4', sm: '6' }} h={{ base: '4', sm: '6' }} mr='2'>
							<SVGComponent />
						</Icon>
						<Text textStyle='p'>{item}</Text>
					</WrapItem>
				))}
			</Wrap>
		</Box>
	));
