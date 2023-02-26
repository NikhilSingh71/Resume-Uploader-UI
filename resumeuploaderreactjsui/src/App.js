import {
  Grid, TextField, Typography, Checkbox, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup,
  Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, FormControlLabel
} from '@mui/material';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function App() {

  const [name,setName] = useState()
  const [email,setEmail]= useState()
  const [gender,setGender]= useState()
  const [startDate, setStartDate] = useState(new Date())
  const [st,setSt] = useState('')

  return (
    <>
      <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 2 }}>
        <Typography variant='h2' component="div" sx={{
          fontWeight: 'bold'
          , color: 'white'
        }}>Resume Uploader</Typography>
      </Box>

      <Grid container justifyContent="center">


        <Grid item xs={5}>
          <Box component="form" noValidate id="resume-form" sx={{ padding: 3 }} >
            <TextField
              id="name"
              name="name"
              required
              fullWidth
              margin='normal'
              label='Name'
              onChange={(e)=>setName(e.target.value)}
            />

            <TextField
              id="email"
              email="email"
              required
              fullWidth
              margin='normal'
              label='Email'
              onChange={(e)=>setEmail(e.target.value)}
            />

           <Box fullWidth margin='normal' >
            <h4>Date of Birth</h4>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
           </Box>

           <FormControl fullWidth margin='normal'>
             <InputLabel id="state-select-label">State</InputLabel>
             <Select id='state-select' value={st} label='st'
              onChange={(e)=>{setSt(e.target.value)}} >

              <MenuItem value="JH">Jharkand</MenuItem>
              <MenuItem value="BH">Bihar</MenuItem>
              <MenuItem value="WB">West Bengal</MenuItem>
              <MenuItem value="UP">Uttar Pradesh</MenuItem>
              <MenuItem value="MP">Madhya Pradesh</MenuItem>
             </Select>
           </FormControl>
            

            <FormControl  fullWidth margin='normal'>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e)=>setGender(e.target.value)}/>
                <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e)=>setGender(e.target.value)}/>
                <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e)=>setGender(e.target.value)}/>
              </RadioGroup>
            </FormControl>



          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'info.light', padding: 1 }}>
            <Typography variant='h5' component="div" sx={{
              fontWeight: 'bold'
              , color: 'white'
            }}>List of Candidates</Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="resume table">
              <TableHead>

                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>

              </TableHead>

              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">Sonam</TableCell>
                  <TableCell align="center">sonam@gmail.com</TableCell>
                  <TableCell align="center">20/10/1995</TableCell>
                  <TableCell align="center">Bihar</TableCell>
                  <TableCell align="center">Female</TableCell>
                  <TableCell align="center">Delhi Ranchi</TableCell>
                  <TableCell align="center"><Avatar src="#" /></TableCell>
                </TableRow>
              </TableBody>

            </Table>
          </TableContainer>
        </Grid>
      </Grid>

    </>
  );
}

export default App;
