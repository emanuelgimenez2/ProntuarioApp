import React, { useState, useRef } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Typography,
  Tabs,
  Tab,
  Box,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  CameraAlt,
  CloudUpload,
  Refresh,
  Fingerprint
} from '@mui/icons-material';

// Componente de Captura de Foto
export function CapturaFoto() {
  const [foto, setFoto] = useState(null);
  const [camaraActiva, setCamaraActiva] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const activarCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setCamaraActiva(true);
    } catch (err) {
      console.error("Error al acceder a la cámara:", err);
    }
  };

  const desactivarCamara = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      videoRef.current.srcObject = null;
      setCamaraActiva(false);
    }
  };

  const tomarFoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setFoto(dataUrl);
    desactivarCamara();
  };

  const subirFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader title="Captura de Fotografía" />
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          {foto ? (
            <img src={foto} alt="Foto capturada" style={{ maxWidth: '100%', height: 'auto' }} />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              style={{ maxWidth: '100%', height: 'auto', display: camaraActiva ? 'block' : 'none' }}
            />
          )}
        </Box>
        
        <Grid container spacing={2} justifyContent="center">
          {!camaraActiva && !foto && (
            <Grid item>
              <Button 
                variant="contained" 
                onClick={activarCamara}
                startIcon={<CameraAlt />}
              >
                Activar Cámara
              </Button>
            </Grid>
          )}
          
          {camaraActiva && (
            <Grid item>
              <Button 
                variant="contained" 
                onClick={tomarFoto}
                startIcon={<CameraAlt />}
              >
                Capturar Foto
              </Button>
            </Grid>
          )}
          
          <Grid item>
            <input
              type="file"
              id="subirFoto"
              accept="image/*"
              onChange={subirFoto}
              style={{ display: 'none' }}
            />
            <Button 
              variant="outlined"
              onClick={() => document.getElementById('subirFoto').click()}
              startIcon={<CloudUpload />}
            >
              Subir Foto
            </Button>
          </Grid>
          
          {foto && (
            <Grid item>
              <Button 
                variant="outlined" 
                onClick={() => setFoto(null)}
                startIcon={<Refresh />}
              >
                Nueva Foto
              </Button>
            </Grid>
          )}
        </Grid>

        {foto && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Fotografía capturada exitosamente
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

// Componente de Captura de Huellas
const DEDOS = [
  { id: 'pulgarDerecho', nombre: 'Pulgar Derecho' },
  { id: 'indiceDerecho', nombre: 'Índice Derecho' },
  { id: 'medioDerecho', nombre: 'Medio Derecho' },
  { id: 'anularDerecho', nombre: 'Anular Derecho' },
  { id: 'meñiqueDerecho', nombre: 'Meñique Derecho' },
  { id: 'pulgarIzquierdo', nombre: 'Pulgar Izquierdo' },
  { id: 'indiceIzquierdo', nombre: 'Índice Izquierdo' },
  { id: 'medioIzquierdo', nombre: 'Medio Izquierdo' },
  { id: 'anularIzquierdo', nombre: 'Anular Izquierdo' },
  { id: 'meñiqueIzquierdo', nombre: 'Meñique Izquierdo' },
];

export function CapturaHuellas() {
  const [huellas, setHuellas] = useState({});
  const [manoActual, setManoActual] = useState(0);
  const [simulandoLector, setSimulandoLector] = useState(false);
  const [dedoSeleccionado, setDedoSeleccionado] = useState(null);

  const subirHuella = (e) => {
    const file = e.target.files[0];
    if (file && dedoSeleccionado) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHuellas(prev => ({
          ...prev,
          [dedoSeleccionado]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const simularLecturaDigital = () => {
    if (!dedoSeleccionado) return;
    setSimulandoLector(true);
    setTimeout(() => {
      setHuellas(prev => ({
        ...prev,
        [dedoSeleccionado]: '/api/placeholder/100/150'
      }));
      setSimulandoLector(false);
    }, 2000);
  };

  const HuellaPreview = ({ dedoId }) => (
    <Box 
      sx={{
        width: 100,
        height: 150,
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.paper'
      }}
    >
      {huellas[dedoId] ? (
        <img src={huellas[dedoId]} alt={`Huella de ${dedoId}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <Fingerprint sx={{ fontSize: 40, color: 'action.disabled' }} />
      )}
    </Box>
  );

  return (
    <Card>
      <CardHeader title="Captura de Huellas Dactilares" />
      <CardContent>
        <Tabs 
          value={manoActual} 
          onChange={(_, newValue) => setManoActual(newValue)}
          centered
        >
          <Tab label="Mano Derecha" />
          <Tab label="Mano Izquierda" />
        </Tabs>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {DEDOS.slice(manoActual * 5, (manoActual + 1) * 5).map(dedo => (
              <Grid item xs={12} sm={2.4} key={dedo.id}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Button
                    variant={dedoSeleccionado === dedo.id ? "contained" : "outlined"}
                    onClick={() => setDedoSeleccionado(dedo.id)}
                    sx={{ mb: 1, width: '100%' }}
                  >
                    {dedo.nombre}
                  </Button>
                  <HuellaPreview dedoId={dedo.id} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box display="flex" justifyContent="center" mt={4} gap={2}>
          <input
            type="file"
            id="subirHuella"
            accept="image/*"
            onChange={subirHuella}
            style={{ display: 'none' }}
          />
          <Button 
            variant="outlined"
            onClick={() => document.getElementById('subirHuella').click()}
            startIcon={<CloudUpload />}
            disabled={!dedoSeleccionado}
          >
            Subir Imagen
          </Button>
          
          <Button 
            variant="contained"
            onClick={simularLecturaDigital}
            startIcon={<Fingerprint />}
            disabled={simulandoLector || !dedoSeleccionado}
          >
            {simulandoLector ? 
              <CircularProgress size={24} color="inherit" /> : 
              'Capturar con Lector'}
          </Button>
        </Box>

        {Object.keys(huellas).length > 0 && (
          <Alert severity="info" sx={{ mt: 2 }}>
            Se han capturado {Object.keys(huellas).length} huellas dactilares
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

// Componente contenedor para ambos
export function CapturaBiometrica() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CapturaFoto />
        </Grid>
        <Grid item xs={12}>
          <CapturaHuellas />
        </Grid>
      </Grid>
    </Container>
  );
}