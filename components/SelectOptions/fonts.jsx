import { useState } from 'react'
import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export const fonts = [
    {
        choice: 'Font Choice 1',
    },
    {
        choice: 'Font Choice 2',
    },
]

const FontsOption = () => {
    const { data: session } = useSession()
    const [showComponent, setShowComponent] = useState(true)
    const [bypass, setBypass] = useState(false)
    const [font, setFont] = useState(fonts)
    let fontChoices = []

    const updateState = (index) => (e) => {
        fontChoices = font.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value }
            } else {
                return item
            }
        })
        setFont(fontChoices)
    }

    const handleSave = () => {
        const postData = async () => {
            const data = {
                email: session.user.email,
                fontChoices: font,
                fontBypass: bypass
            }
            const response = await fetch('/api/routes/fontsRoute', {
                method: 'PUT',
                body: JSON.stringify(data)
            })
            return response.json()
        }
        postData().then((data) => {
            setShowComponent(false)
        })
    }


    return(
        <>
            {showComponent? (
                <>
                    <h2>Fonts</h2>
                    <br />
                    <p>Further customization comes in the form of choosing up to two fonts.  Keep in mind that each font has the ability to be italic, multiple weights and any size or color giving you a broad spectrum of creativity.</p>
                    <br />
                    <h5 style={{ color: 'var(--mb1-1)', textDecoration: 'underline' }}><a href="https://fonts.google.com/" target="_blank" rel="nofollow noreferrer noopener">Check out Google Fonts</a></h5>
                    <br />
                    {fonts.map((item, index) => (
                        <TextField 
                            key={index}
                            label={item.choice}
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            name='fontChoice'
                            onChange={updateState(index)}
                        />
                    ))}
                    <br />
                    <FormControlLabel 
                        sx={{ fontFamily: 'Oxygen' }} 
                        control=
                        {<Checkbox 
                            onChange={(e) => setBypass(e.target.checked)}
                        />} 
                        label="Check here to bypass this option and discuss colors later." />
                    <Button
                        onClick={handleSave}
                        variant='contained'
                    >
                        Save Fonts
                    </Button>
                </>
            ) : (
                <>
                    <h4>Fonts saved.</h4>
                    <br />
                    <Button
                        onClick={() => setShowComponent(true)}
                        variant='contained'
                        fullWidth
                    >
                        Edit Fonts
                    </Button>
                </>
            )}
        </>
    )
}

export default FontsOption