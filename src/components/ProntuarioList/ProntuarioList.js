import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListaProntuarios = ({ prontuarios }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Lista de Prontuarios
      </Typography>
      <List>
        {prontuarios.map((prontuario) => (
          <ListItem key={prontuario.id}>
            <ListItemText primary={prontuario.nombre} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ListaProntuarios;