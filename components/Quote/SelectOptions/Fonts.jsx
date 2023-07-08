import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { OptionsStyles } from './style'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'


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
                    <h2 style={{ fontFamily: 'audiowide' }}>FONTS</h2>
                    <br />
                    <h5>Further customization comes in the form of choosing up to two fonts.  Keep in mind that each font has the ability to be italic, multiple weights and any size or color giving you a broad spectrum of creativity.</h5>
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
                    <p style={{ color: 'var(--mb1-1)', textDecoration: 'underline' }}><a href="https://fonts.google.com/" target="_blank" rel="nofollow noreferrer noopener">Check out Google Fonts for ideas</a></p>
                    <br />
                    <FormControlLabel 
                        sx={{ fontFamily: 'Oxygen' }} 
                        control=
                        {<Checkbox 
                            onChange={(e) => setBypass(e.target.checked)}
                        />} 
                        label="Check here to bypass this option and discuss fonts later." />
                    <Button
                        onClick={handleSave}
                        variant='contained'
                        fullWidth
                        className='save-btn'
                    >
                        Save & Continue
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
                        style={{ backgroundColor: 'var(--mb1-1)', color: 'var(--char1)' }}
                    >
                        Edit Fonts
                    </Button>
                </>
            )}
        </>
    )
}

export default FontsOption