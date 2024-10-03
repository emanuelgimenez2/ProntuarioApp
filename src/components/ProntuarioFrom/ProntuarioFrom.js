import React, { useState } from 'react';
import { 
  Button, TextField, Card, CardContent, CardHeader, 
  Container, Grid, Typography, FormControlLabel, Checkbox,
  Select, MenuItem, InputLabel, FormControl
} from '@mui/material'

const ProntuarioMaritimo = () => {
  const [formData, setFormData] = useState({
    // Datos de encabezado
    prontLocalCuruPzbuNro: '',
    id: '',

    // Datos personales
    de: '',
    a: '',

    // Filiación Civil
    hijoDe: '',
    yDe: '',
    nacion: '',
    provincia: '',
    pueblo: '',
    nacioEl: '',
    estadoCivil: '',
    profesion: '',
    leeYEscribe: false,
    dni: '',
    emisor: '',
    vinoAlPais: '',
    estatura: '',
    cuerpo: '',
    instruccion: '',
    aspectoSocial: 'bueno',
    domicilio: '',
    trabajaEn: '',
    documentosPresentados: '',

    // Filiación Cromática
    cutis: '',
    cutisParticularidades: '',
    cabello: '',
    cabelloParticularidades: '',
    barba: '',
    barbaParticularidades: '',
    bigote: '',
    bigoteParticularidades: '',
    ojos: '',
    ojosParticularidades: '',

    // Filiación Morfológica
    frente: '',
    frenteParticularidades: '',
    cejas: '',
    cejasParticularidades: '',
    parpados: '',
    parpadosParticularidades: '',
    narizDorso: '',
    narizParticularidades: '',
    narizBase: '',
    boca: '',
    bocaParticularidades: '',
    labios: '',
    labiosParticularidades: '',
    menton: '',
    mentonParticularidades: '',
    orejas: '',
    orejasParticularidades: '',

    // Parentescos (array de objetos)
    parentescos: [{ nombre: '', vinculo: '', domicilio: '' }],

    // Datos finales
    motivoIdentificacion: '',
    lugarYFecha: '',
    motivoProntuarioYAntecedentes: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleParentescoChange = (index, field, value) => {
    const newParentescos = [...formData.parentescos];
    newParentescos[index][field] = value;
    setFormData(prevData => ({
      ...prevData,
      parentescos: newParentescos
    }));
  };

  const addParentesco = () => {
    setFormData(prevData => ({
      ...prevData,
      parentescos: [...prevData.parentescos, { nombre: '', vinculo: '', domicilio: '' }]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del prontuario:', formData);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  const opcionesMorfologicas = {
    cejas: ['Arqueadas', 'Onduladas', 'Rectas', 'Oblicua interna', 'Oblicua externa', 'Cejijuntas'],
    parpados: ['Descubiertos', 'Inferiores abultados', 'Apretados exteriormente', 'Apretados interiormente', 'Exteriores levantados', 'Exteriores bajados', 'Estrabismo convergente ojo derecho', 'Estrabismo convergente en ambos ojos', 'Estrabismo divergente ojo derecho', 'Falta de ojo'],
    nariz: ['Rectilinea horizontal', 'Ondulada horizontal', 'Concava horizontal', 'Convexa horizontal', 'Convexa recta horizontal', 'Concava elevada', 'Rectilinia baja', 'Ondulada baja', 'Concava baja'],
    boca: ['Pequeña', 'Mediana', 'Grande'],
    labios: ['Labios grueso', 'Labios finos', 'Superior grande', 'Inferior grande', 'Grande y ancha', 'Caidos', 'Pequeños', 'Asimetricos'],
    menton: ['Fugitivo', 'Recto', 'Con hoyo', 'Saliente', 'Con hoyo prolongado', 'Con surco'],
    orejas: ['Largas y grandes', 'Medio', 'Pequeñas o cortas', 'Salientes'],
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        AUTORIDAD MARÍTIMA - PLANILLA PRONTUARIAL
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Card sx={{ mb: 2 }}>
          <CardHeader title="Datos de Identificación" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="prontLocalCuruPzbuNro"
                  label="Pront. LOCAL CURU PZBU Nº"
                  value={formData.prontLocalCuruPzbuNro}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="id"
                  label="I.D."
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="de"
                  label="De"
                  value={formData.de}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="a"
                  label="(a)"
                  value={formData.a}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardHeader title="FILIACIÓN CIVIL" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="hijoDe"
                  label="Hijo de"
                  value={formData.hijoDe}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="yDe"
                  label="Y de"
                  value={formData.yDe}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="nacion"
                  label="Nación"
                  value={formData.nacion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="provincia"
                  label="Provincia"
                  value={formData.provincia}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="pueblo"
                  label="Pueblo"
                  value={formData.pueblo}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="nacioEl"
                  label="Nació el"
                  type="date"
                  value={formData.nacioEl}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="estadoCivil"
                  label="Estado civil"
                  value={formData.estadoCivil}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="profesion"
                  label="Profesión"
                  value={formData.profesion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.leeYEscribe}
                      onChange={handleInputChange}
                      name="leeYEscribe"
                    />
                  }
                  label="¿Lee y escribe?"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="dni"
                  label="DNI"
                  value={formData.dni}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="emisor"
                  label="EMISOR"
                  value={formData.emisor}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="vinoAlPais"
                  label="Vino al país"
                  value={formData.vinoAlPais}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="estatura"
                  label="Estatura (cm)"
                  type="number"
                  value={formData.estatura}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="cuerpo"
                  label="Cuerpo"
                  value={formData.cuerpo}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="instruccion"
                  label="Instrucción"
                  value={formData.instruccion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="aspectoSocial"
                  label="Aspecto social"
                  value={formData.aspectoSocial}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="domicilio"
                  label="Domicilio"
                  value={formData.domicilio}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="trabajaEn"
                  label="Trabaja en"
                  value={formData.trabajaEn}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="documentosPresentados"
                  label="Documentos presentados"
                  multiline
                  rows={4}
                  value={formData.documentosPresentados}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardHeader title="FILIACIÓN CROMÁTICA" />
          <CardContent>
            <Grid container spacing={2}>
              {['cutis', 'cabello', 'barba', 'bigote', 'ojos'].map((item) => (
                <React.Fragment key={item}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name={item}
                      label={item.charAt(0).toUpperCase() + item.slice(1)}
                      value={formData[item]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name={`${item}Particularidades`}
                      label={`Particularidades ${item}`}
                      value={formData[`${item}Particularidades`]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
        <CardHeader title="FILIACIÓN MORFOLÓGICA" />
        <CardContent>
          <Grid container spacing={2}>
            {Object.entries(opcionesMorfologicas).map(([campo, opciones]) => (
              <Grid item xs={12} sm={6} key={campo}>
                <FormControl fullWidth>
                  <InputLabel id={`${campo}-label`}>{campo.charAt(0).toUpperCase() + campo.slice(1)}</InputLabel>
                  <Select
                    labelId={`${campo}-label`}
                    id={campo}
                    name={campo}
                    value={formData[campo]}
                    label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                    onChange={handleInputChange}
                  >
                    {opciones.map((opcion) => (
                      <MenuItem key={opcion} value={opcion}>{opcion}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

        <Card sx={{ mb: 2 }}>
          <CardHeader title="PARENTESCOS" />
          <CardContent>
            {formData.parentescos.map((parentesco, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    value={parentesco.nombre}
                    onChange={(e) => handleParentescoChange(index, 'nombre', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Vínculo"
                    value={parentesco.vinculo}
                    onChange={(e) => handleParentescoChange(index, 'vinculo', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Domicilio"
                    value={parentesco.domicilio}
                    onChange={(e) => handleParentescoChange(index, 'domicilio', e.target.value)}
                  />
                </Grid>
              </Grid>
            ))}
            <Button onClick={addParentesco}>Agregar Parentesco</Button>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardHeader title="Información Adicional" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="motivoIdentificacion"
                  label="Motivo de la identificación"
                  multiline
                  rows={4}
                  value={formData.motivoIdentificacion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="lugarYFecha"
                  label="Lugar y fecha"
                  value={formData.lugarYFecha}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="motivoProntuarioYAntecedentes"
                  label="Motivo del prontuario y otros antecedentes"
                  multiline
                  rows={4}
                  value={formData.motivoProntuarioYAntecedentes}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Guardar Prontuario
        </Button>
      </form>
    </Container>
  );
};

export default ProntuarioMaritimo;