import React, { Component } from 'react';
import { RegistrationForm } from '../components/RegistrationForm';
import { Box, Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { ResultForm } from '../components/ResultForm';

const Home = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="REGISTER" value="1" />
              <Tab label="RESULT" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <RegistrationForm />
          </TabPanel>
          <TabPanel value="2">
            <ResultForm />
          </TabPanel>
        </TabContext>
      </Box>
    </section>
  );
};

export default Home;
