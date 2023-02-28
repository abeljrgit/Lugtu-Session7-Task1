import React, { useState } from 'react';
import { Button, Card, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as actions from '../../../services/actionType';
import { onGetUserData } from '../../../services/action';
import { ModalComponent } from './Modal';

export const RegistrationForm = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    job: '',
    error: {
      nameError: '',
      jobError: '',
    },
    isNameValid: false,
    isJobValid: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const nameFieldOnChangeHandler = (e) => {
    const nameValue = e.target.value;
    let nameError = '';
    let isNameValid = false;
    if (nameValue === '') {
      nameError = 'Name cannot be empty';
      isNameValid = false;
    } else {
      nameError = '';
      isNameValid = true;
    }

    setRegisterForm((prev) => {
      return {
        ...prev,
        name: nameValue,
        error: { ...prev.error, nameError },
        isNameValid,
      };
    });
  };

  const jobFieldOnChangeHandler = (e) => {
    const jobValue = e.target.value;
    let jobError = '';
    let isJobValid = false;
    if (jobValue === '') {
      jobError = 'Job cannot be empty';
      isJobValid = false;
    } else {
      jobError = '';
      isJobValid = true;
    }

    setRegisterForm((prev) => {
      return {
        ...prev,
        job: jobValue,
        error: { ...prev.error, jobError },

        isJobValid,
      };
    });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (registerForm.isNameValid && registerForm.isJobValid) {
      axios
        .post('https://reqres.in/api/users', {
          name: registerForm.name,
          job: registerForm.job,
        })
        .then((res) => {
          setModalInfo({
            title: 'Success',
            description: ' User was registered!\nPlease Check the result tab',
          });
          setIsModalOpen(true);
          dispatch(onGetUserData(res.data));
        })
        .catch((err) => {
          setModalInfo({
            title: 'Failed',
            description: 'User was not registered\nSomething bad happened',
          });
          setIsModalOpen(true);
          console.log(err);
        });
    } else if (registerForm.name === '' || registerForm.job === '') {
      setModalInfo({
        title: 'Failed',
        description: 'Please fill-up the form',
      });
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <ModalComponent
        isOpen={isModalOpen}
        onCloseHandler={() => {
          setIsModalOpen(false);
        }}
        title={modalInfo.title}
        description={modalInfo.description}
      />
      <Card sx={{ width: '300px', p: 4 }}>
        <form onSubmit={onFormSubmitHandler}>
          <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h6">
            User Registration
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              type="text"
              value={registerForm.name}
              placeholder="Please type your name"
              onChange={nameFieldOnChangeHandler}
            />
            <Typography sx={{ color: 'red' }}>
              {registerForm.error.nameError}
            </Typography>
            <TextField
              type="text"
              value={registerForm.job}
              placeholder="Please type your job"
              onChange={jobFieldOnChangeHandler}
            />
            <Typography sx={{ color: 'red' }}>
              {registerForm.error.jobError}
            </Typography>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </Stack>
        </form>
      </Card>
    </>
  );
};
