import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, marginTop: 0 }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          className='text-gray-800'
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="gmotors" />
        </ListItemButton>
        <ListItemButton
          className='text-gray-800'
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Galicia" />
        </ListItemButton>
        <ListItemButton
          className='text-gray-800'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="GTD" />
        </ListItemButton>
        <ListItemButton
          className='text-gray-800'
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Equivida" />
        </ListItemButton>
      </List>
    </Box>
  );
}