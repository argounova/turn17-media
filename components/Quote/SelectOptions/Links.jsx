import { useState } from "react"
import { useSession } from 'next-auth/react'
import { OptionsStyles } from "./style"
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material'


const links = [
  {
      label: 'Navigation Link 1',
  },
  {
      label: 'Navigation Link 2',
  },
  {
      label: 'Navigation Link 3',
  },
  {
      label: 'Navigation Link 4',
  },
]

const LinksOption = () => {
  const { data: session } = useSession()
  const [showComponent, setShowComponent] = useState(true)
  const [bypass, setBypass] = useState(false)
  const [navLink, setNavLink] = useState(links)
  let navLinkChoices = []

  const updateState = (index) => (e) => {
    navLinkChoices = navLink.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value }
      } else {
        return item
      }
    })
    setNavLink(navLinkChoices)
  }

  const handleSave = () => {
    const postData = async () => {
      const data = {
        email: session.user.email,
        navLinks: navLink,
        linkBypass: bypass
      }
      const response = await fetch('/api/routes/navLinksRoute', {
        method: 'PUT',
        body: JSON.stringify(data),
      })
      return response.json()
    }
    postData().then((data) => {
      setShowComponent(false)
    })
  }

  return (
    <>
      {showComponent? (
        <>
          <h2>Navigation Links</h2>
          <br />
          <p>What are the names of your navigation links?  Provide up to four and remember that “Home” is redundant so consider links such as “About”, “Contact”, “Gallery”.</p>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {links.map((item, index) => (
              <TextField 
                key={index}
                label={item.label}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '35ch' }}
                name="navLink"
                onChange={updateState(index)}
              />
            ))}
          </div>
          <br />
          <FormControlLabel 
            sx={{ fontFamily: 'Oxygen' }} 
            control=
              {<Checkbox 
                onChange={(e) => setBypass(e.target.checked)}
              />} 
            label="Check here to bypass this option and discuss links later." />
          <Button
            onClick={handleSave}
            variant='contained'
            fullWidth
            className='save-btn'
          >
            Save Links
          </Button>
        </>
      ) : (
        <>
          <h4>Links saved.</h4>
          <br />
          <Button
            onClick={() => setShowComponent(true)}
            variant='contained'
            fullWidth
            style={{ backgroundColor: 'var(--mb1-1)', color: 'var(--char1)' }}
          >
            Edit Links
          </Button>
        </> 
      )}
    </>
  )
}

export default LinksOption