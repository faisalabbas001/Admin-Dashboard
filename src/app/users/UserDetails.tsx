"use client"
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '@mui/material/Button';
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const schema = yup
  .object({
    name: yup.number().required("please enter your id  🤠"),
    name: yup.string().required("please enter your name 🤠"),
    email: yup.string().email().required("please enter your email 😎"),
  })
  .required()

const UserDetails = ({ishandleclose,rows}) => {
  const [age, setAge] = useState('user');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(()=>{
if(rows){
setAge(rows.type)
reset({
  id:rows.id,
  name:rows.name,
  email:rows.email

})

}
  },[])

  const onSubmit = (data) => {
    
    Object.assign(data, { type: age });
    if(rows){
      Object.assign( { id:rows.id});
    axios.put('http://localhost:3000/api/users',JSON.stringify(data))
    
    .then((response) => {
    console.log("the response has been occured that is",response)
    
    toast.success('👨👍👍👍  successfully added ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    })
    
    .catch((error) => {
console.log("the error has been occured that is",error)

    })
    
    }
    else{
      Object.assign(data, { type: age });
      axios.post('http://localhost:3000/api/users',JSON.stringify(data))
      
      .then((response) => {
      console.log("the response has been occured that is",response)
      
      toast.success('👨👍👍👍  successfully added ', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      })
      
      .catch((error) => {
  console.log("the error has been occured that is",error)
  
      })
      
    }
    
   
   
  };

  return (
    <>
<ToastContainer />
<div className="flex justify-start">
            <ArrowBackIosNewIcon onClick={() => ishandleclose()} className="cursor-pointer" />
            <h2 className="font-bold mb-4">Users</h2>
          </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
          <div>
            <TextField fullWidth size='small' label="id" {...register("id")} variant="outlined" />
            <p className='text-orange-600 ml-1 text-sm'>{errors.id?.message}</p>
          </div>
          <div>
            <TextField fullWidth size='small' label="Name" {...register("name")} variant="outlined" />
            <p className='text-orange-600 ml-1 text-sm'>{errors.name?.message}</p>
          </div>
          <div>
            <TextField fullWidth size='small' label="Email" {...register("email")} variant="outlined" />
            <p className='text-orange-600 ml-1 text-sm'>{errors.email?.message}</p>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Type"
                size='small'
                onChange={handleChange}
              >
                <MenuItem value="user">user</MenuItem>
                <MenuItem value="manager">manager</MenuItem>
                <MenuItem value="admin">admin</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className='mt-2 flex justify-end'>
          <Button variant="outlined" className="mb-3" type="submit">save</Button>
        </div>
      </form>
    </>
  )
}

export default UserDetails
