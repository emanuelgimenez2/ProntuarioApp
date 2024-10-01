import React, { useState, useRef } from 'react';
import { 
  Button, TextField, Card, CardContent, CardHeader, 
  Container, Grid, Typography
} from '@mui/material';
import { CameraAlt, Fingerprint } from '@mui/icons-material';

const ProntuarioApp = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    direccion: ''
  });
  const [foto, setFoto] = useState(null);
  const [huellas, setHuellas] = useState(null);
  const videoRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const iniciarCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error al acceder a la cámara:", err);
    }
  };

  const tomarFoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    setFoto(canvas.toDataURL('image/jpeg'));
  };

  const capturarHuellas = () => {
    setHuellas("Huellas digitales capturadas (simulación)");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Prontuario
      </Typography>
      
      <Card sx={{ mb: 2 }}>
        <CardHeader title="Datos Personales" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="nombre"
                label="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="apellido"
                label="Apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="edad"
                label="Edad"
                value={formData.edad}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="direccion"
                label="Dirección"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardHeader title="Fotografía" />
        <CardContent>
          <Button 
            variant="contained" 
            startIcon={<CameraAlt />} 
            onClick={iniciarCamara}
            sx={{ mb: 2 }}
          >
            Iniciar Cámara
          </Button>
          <div>
            <video 
              ref={videoRef} 
              style={{display: foto ? 'none' : 'block', maxWidth: '100%'}} 
              autoPlay 
            />
            {foto && <img src={foto} alt="Foto capturada" style={{maxWidth: '100%'}} />}
          </div>
          <Button 
            variant="contained" 
            onClick={tomarFoto} 
            sx={{ mt: 2 }}
          >
            Tomar Foto
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardHeader title="Huellas Digitales" />
        <CardContent>
          <Button 
            variant="contained" 
            startIcon={<Fingerprint />} 
            onClick={capturarHuellas}
          >
            Capturar Huellas
          </Button>
          {huellas && <Typography sx={{ mt: 2 }}>{huellas}</Typography>}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProntuarioApp;