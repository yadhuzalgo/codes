import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setUpdate] = useState(false)
    var[selected,setSelected]=useState([])
    var[student,setStudent]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/student")
      .then(response=>{
        setStudent(student=response.data)
        console.log(student)
      })
      .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/student/"+id)
        .then(response=>{
            alert("successfully deleted")
            window.location.reload(false)
        })
        .catch(error=>console.log(error))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setUpdate(true)
    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>grade</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {student.map((value,index)=>{
                return<TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.grade}</TableCell>
                <TableCell>
                    <Button onClick={()=>deleteValue(value.id)}>delete</Button>
                </TableCell>
                <TableCell><Button color='success' onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
  </TableContainer>

  if(update)
  finalJSX=<Add data={selected} method="put"/>
  return (
    finalJSX
     
    
  )
}

export default View
