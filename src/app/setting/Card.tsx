"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
import dynamic from "next/dynamic";
const CalenderChart=dynamic(()=>import('./charts/CalenderChart'),{
    loading:()=> <p> char is loading...</p>
  });
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item> <a href="/finance.jpg" download>
        <Image
          src="/finance.jpg"
          alt="finance2"
          width={800}
          height={500}
        />
      </a></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><a href="/finance1.jpg" download>
        <Image
          src="/finance2.jpg"
          alt="finance2"
          width={800}
          height={500}
        />
      </a></Item>
        </Grid>
      
        <Grid item xs={12}>
         <CalenderChart/>
        </Grid> 
      </Grid>
    </Box>
  );
}