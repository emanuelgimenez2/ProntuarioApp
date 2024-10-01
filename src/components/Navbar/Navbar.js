import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ setVista }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Sistema de Prontuarios
      </Typography>
      <Button color="inherit" onClick={() => setVista('inicio')}>Inicio</Button>
      <Button color="inherit" onClick={() => setVista('nuevo')}>Nuevo</Button>
      <Button color="inherit" onClick={() => setVista('lista')}>Lista</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;