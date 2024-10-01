import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Sistema de Prontuarios. Todos los derechos reservados.
      </Typography>
    </Container>
  </Box>
);

export default Footer;