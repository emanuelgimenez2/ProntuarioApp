import React, { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import ListaProntuarios from './components/ProntuarioList/ProntuarioList';
import ProntuarioApp from './components/ProntuarioFrom/ProntuarioFrom';
import { CapturaBiometrica } from './components/CapturaBiometrica/CapturaBiometrica';

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
        {vista === 'nuevo' && (
          <>
            <ProntuarioApp />
            <Box mt={4}>
              <CapturaBiometrica />
            </Box>
          </>
        )}
        {vista === 'lista' && <ListaProntuarios prontuarios={prontuarios} />}
      </Container>
      <Footer />
    </>
  );
};

export default App;