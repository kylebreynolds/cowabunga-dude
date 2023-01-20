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
    <Paper sx={{ bgcolor:'green', position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
    <BottomNavigation sx={{bgcolor:"black", width: '100%' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={{color:'#4267B2'}}
        value="recents"
        icon={<FacebookIcon/>}
        href='https://www.facebook.com/profile.php?id=100084473899055' 
      />
      <BottomNavigationAction
       style={{color:'#E1306C'}}
        value="favorites"
        icon={<InstagramIcon />}
        href='https://www.instagram.com/cowabungadudekc/'
      />
      <BottomNavigationAction
        
        style={{color:'green'}}
        value="nearby"
        icon={<PaidIcon />}
        href='https://account.venmo.com/u/nolan_smith'
      />
    </BottomNavigation>
    </Paper>
  );
}