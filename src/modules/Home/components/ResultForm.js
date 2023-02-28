import { Card, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const ResultForm = () => {
  const userData = useSelector((state) => {
    return state.userData;
  });
  return (
    <Card sx={{ width: '300px', p: 4 }}>
      <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h6">
        Result
      </Typography>
      <Typography>{`Name:${userData?.name ?? ''}`}</Typography>
      <Typography>{`Job:${userData?.job ?? ''}`}</Typography>
      <Typography>{`Id:${userData?.id ?? ''}`}</Typography>
      <Typography>{`Created At:${userData?.createdAt ?? ''}`}</Typography>
    </Card>
  );
};
