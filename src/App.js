import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import ListaProntuarios from './components/ProntuarioList/ProntuarioList';
import ProntuarioApp from './components/ProntuarioFrom/ProntuarioFrom';  // Asumimos que este componente ya existe

const App = () => {
  const [vista, setVista] = useState('inicio');
  const [prontuarios, setProntuarios] = useState([
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María García' },
  ]);

  return (
    <>
      <CssBaseline />
      <Navbar setVista={setVista} />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        {vista === 'inicio' && <Inicio />}
        {vista === 'nuevo' && <ProntuarioApp />}
        {vista === 'lista' && <ListaProntuarios prontuarios={prontuarios} />}
      </Container>
      <Footer />
    </>
  );
};

export default App;