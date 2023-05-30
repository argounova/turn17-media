import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Looks4RoundedIcon from '@mui/icons-material/Looks4Rounded';
import Looks5RoundedIcon from '@mui/icons-material/Looks5Rounded';
import Divider from '@mui/material/Divider';

export default function ContentGrid({ 
    primaryText1,
    secondaryText1,
    primaryText2,
    secondaryText2,
    primaryText3,
    secondaryText3,
    primaryText4,
    secondaryText4,
    primaryText5,
    secondaryText5,
}) {
  return (
    <List
      sx={{
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'var(--mb1-1)' }}>
            <LooksOneRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText1} secondary={secondaryText1} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'var(--mb1-1)' }}>
            <LooksTwoRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText2} secondary={secondaryText2} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'var(--mb1-1)' }}>
            <Looks3RoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText3} secondary={secondaryText3} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'var(--mb1-1)' }}>
            <Looks4RoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText4} secondary={secondaryText4} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'var(--mb1-1)' }}>
            <Looks5RoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText5} secondary={secondaryText5} />
      </ListItem>
    </List>
  );
}