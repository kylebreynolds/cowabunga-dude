import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaidIcon from '@mui/icons-material/Paid';
import Paper from '@mui/material/Paper';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={5}>
    <BottomNavigation sx={{bgcolor:"black", width: 400 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={{color:'blue'}}
        value="recents"
        icon={<FacebookIcon />}
      />
      <BottomNavigationAction
       style={{color:'#E1306C'}}
        value="favorites"
        icon={<InstagramIcon />}
      />
      <BottomNavigationAction
        style={{color:'green'}}
        value="nearby"
        icon={<PaidIcon />}
      />
    </BottomNavigation>
    </Paper>
  );
}