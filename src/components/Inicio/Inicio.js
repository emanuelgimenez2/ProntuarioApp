import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Inicio = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Bienvenido al Sistema de Prontuarios
      </Typography>
      <Typography variant="body1">
        Seleccione una opción en la barra de navegación para comenzar.
      </Typography>
    </CardContent>
  </Card>
);

export default Inicio;