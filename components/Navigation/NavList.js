import { Button, HStack, List, ListItem } from '@chakra-ui/react';
import { BiDownload } from 'react-icons/bi';
import { NavItem } from './NavItem';

export const NavList = ({ routes }) => (
  <HStack
    as={List}
    listStyleType="none"
    display={{ base: 'none', lg: 'flex' }}
    spacing={[20]}
    w="min-content"
    alignItems="center">
    {routes.map(({ href, text, to }) => (
      <NavItem key={text} href={href} text={text} to={to} />
    ))}
  </HStack>
);
