import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[student,setStudent] = useState([])
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
    
  return (
    
      <TableContainer>
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
                    <TableCell><Button>update</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    
  )
}

export default View
