import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelfValue, deleteUser } from '../Store/Slice/UserSlice';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

const SelfFamilyTabs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [value, setValue] = React.useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleFullNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSelfValue({ id: user[user.length - 1].id + 1, name, gender }));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <h2>User Registration Page</h2>
      <Box sx={{ width: '100%', padding: '20px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Self" {...a11yProps(0)} />
            <Tab label="Family" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" onChange={handleFullNameChange} style={{ marginBottom: '10px' }} />
              <TextField id="outlined-basic" label="Gender" variant="outlined" onChange={handleGenderChange} style={{ marginBottom: '10px' }} />
              <button style={{ padding: '10px', cursor: 'pointer' }}>Add</button>
            </form>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" onChange={handleFullNameChange} style={{ marginBottom: '10px' }} />
              <TextField id="outlined-basic" label="Gender" variant="outlined" onChange={handleGenderChange} style={{ marginBottom: '10px' }} />
              <button style={{ padding: '10px', cursor: 'pointer' }}>Add</button>
            </form>
          </div>
        </CustomTabPanel>
      </Box>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Full Name</th>
            <th>Gender</th>
            {/* <th>DOB</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              {/* <td>{user.dob}</td> */}
              <td>
                <button onClick={(e) => handleDelete(user.id)} style={{ padding: '5px', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SelfFamilyTabs;