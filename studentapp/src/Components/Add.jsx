import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })
    const inputHandler = (e)=>{
        const{name,value}= e.target 
        setInput({...input,[name]:value})
    }
    const readValues = ()=>{
         console.log("clicked")
         axios
         .post("http://localhost:3005/student",input)
         .then(response=>{
            alert("successfully added")
         })
         .catch(error=>console.log(error))
        }
  return (
    <div>
      <TextField label="name" name='name'variant="outlined" value={input.name} onChange={inputHandler}/> <p/>
       <Typography>{input.name}</Typography>
      <TextField label="grade" name='grade' variant="filled" value={input.grade} onChange={inputHandler}/> <p/>
       <Typography>{input.grade}</Typography>
      <Button variant="contained" onClick={readValues} color='success'>submit</Button>
    </div>
  )
}

export default Add
