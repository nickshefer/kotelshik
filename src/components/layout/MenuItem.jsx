import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ children, ...props }) => (
  <Box mt={{ base: 4, md: 0 }}>
    <Link {...props}>{children}</Link>
  </Box>
);
