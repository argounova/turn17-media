import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
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
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText1} secondary={secondaryText1} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText2} secondary={secondaryText2} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText3} secondary={secondaryText3} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText4} secondary={secondaryText4} />
      </ListItem>
      <Divider variant="inset" component="li" style={{ borderRadius: '0px' }}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText5} secondary={secondaryText5} />
      </ListItem>
    </List>
  );
}