import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Outlet, useNavigate } from 'react-router-dom';

export default function NavTabs() {

  const [value, setValue] = React.useState("pendingOrders");

  let navigater=useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigater(`/${newValue}`)
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} 
            onChange={handleChange} 
            centered>
        <Tab value="pendingOrders" label="Pending Orders" />
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="catalogManager" label="Catalog Manager" />
        <Tab value="usersManagement" label="Users' Management" />
      </Tabs>
      <Outlet></Outlet>
    </Box>
  );
}