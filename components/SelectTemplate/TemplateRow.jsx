import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Radio from '@mui/material/Radio'
import Image from 'next/image'

const TemplateRow = ({ templateTitle, templateSummary, templateThumb, value, onChange, checked }) => {
    

  return (
    <List
      sx={{
        width: '95%',
      }}
    >
      <ListItem>
        <Radio 
            checked={checked}
            onChange={onChange}
            value={value}
            name='selectedTemplate'
            inputProps={{ 'aria-label': 'selectedTemplate' }}
        />
        <ListItemAvatar>
          <Avatar
            variant='square'
            sx={{ width: 100, height: 100 }}
          >
            <Image 
                src={templateThumb} 
                alt="Flying Lugnut Site" 
                width={100}
                height={100}    
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={templateTitle} secondary={templateSummary} style={{ marginLeft: '20px' }}/>
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

export default TemplateRow