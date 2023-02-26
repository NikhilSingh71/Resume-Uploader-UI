import {
  Grid, TextField, Typography, Checkbox, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup,
  Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, FormControlLabel, Button
} from '@mui/material';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {styled} from '@mui/material/styles'

const Input = styled('input')({
  display:'none',
})

function App() {

  const [name,setName] = useState()
  const [email,setEmail]= useState()
  const [gender,setGender]= useState()
  const [startDate, setStartDate] = useState(new Date())
  const [st,setSt] = useState('')
  const [location,setLocation]=useState([])

  const handleLocation = (e) =>{
      let data = location
      data.push(e.target.value)
      setLocation(data)
  }

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

         <FormControl component='fieldset' fullWidth margin='normal'>
         <FormLabel id="preferred-location" component='legend' >Preferred Job Location</FormLabel>
         <FormGroup row>
         <FormControlLabel  control={<Checkbox />} label="Delhi" value="delhi" onChange={(e)=>handleLocation(e)}/>
         <FormControlLabel  control={<Checkbox />} label="Mumbai" value="mumbai" onChange={(e)=>handleLocation(e)}/>
         <FormControlLabel  control={<Checkbox />} label="Banglore" value="banglore" onChange={(e)=>handleLocation(e)}/>
         <FormControlLabel  control={<Checkbox />} label="Kolkata" value="kolkata" onChange={(e)=>handleLocation(e)}/>
         </FormGroup>
         </FormControl>


         <Stack direction="row" alignItems="center" spacing={4}>

          <label htmlFor='profile-photo'>
            <Input accept="image/*" id="profile-photo" type="file" />
            <Button variant='contained' component="span">UPLOAD PHOTO</Button>
          </label>

          <label htmlFor='resume-file'>
            <Input accept="doc/*" id="resume-file" type="file" />
            <Button variant='contained' component="span">UPLOAD RESUME</Button>
          </label>
         </Stack>
       
         <Button type='submit' variant='contained' sx={{mt:3 , mb:2, px:5}} color='error'>Submit</Button>
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
