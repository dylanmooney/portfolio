import { Box, Container, Text } from '@chakra-ui/react';
import { Element } from 'react-scroll';

import { Overlay } from '../../components/Overlay';
import { Skills } from './Skills';
import about from './about.json';

export const About = () => {
  const { description, skills } = about;

  return (
    <Element name="about">
      <Box
        clipPath="polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)"
        pt={{ base: 24, md: 28, lg: 32, xl: 44 }}
        pb={{ base: 24, sm: 32, md: 36, xl: 52 }}>
        <Overlay zIndex={-10} />
        <Container variant="section" pos="relative">
          <Box
            as="h2"
            textStyle="h2"
            textAlign={{ base: 'center', lg: 'left' }}>
            About Me
          </Box>
          <Box display={{ lg: 'flex' }} gap={7} justifyContent="space-between">
            <Box flex={1} mb={8}>
              {description.split('\n').map((text, idx) => (
                <Text key={idx} textStyle="p">
                  {text}
                </Text>
              ))}
            </Box>

            <Box flex={1}>
              <Skills skills={skills} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};
