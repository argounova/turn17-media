import { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    TextField
} from '@mui/material'
  

export const colors = [
    {
        choice: 'Color 1',
    },
    {
        choice: 'Color 2',
    },
    {
        choice: 'Color 3',
    },
    {
        choice: 'Color 4',
    },
    {
        choice: 'Color 5',
    },
]

const ColorsOption = () => {
    const { data: session } = useSession()
    const [showComponent, setShowComponent] = useState(true)
    const [bypass, setBypass] = useState()
    const [color, setColor] = useState(colors)
    let colorChoices = []

    const updateState = (index) => (e) => {
        colorChoices = color.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value }
            } else {
                return item
            }
        })
        setColor(colorChoices)
    }

    const handleSave = () => {
        const postData = async () => {
            const data = {
                email: session.user.email,
                colorChoices: color,
                colorBypass: bypass
            }
            const response = await fetch('/api/routes/colorsRoute', {
                method: 'PUT',
                body: JSON.stringify(data),
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
                <h2>Colors</h2>
                <br />
                <p>Arguably the most impactful element of your website is the color palette as this sets the overall tone and personality.  It can be difficult to narrow down all of the colors in the rainbow to only five but a cohesive site typically won&apos;t have more than that.</p>
                <br />
                <h5 style={{ color: 'var(--mb1-1)', textDecoration: 'underline' }}><a href="https://color.adobe.com/explore" target="_blank" rel="nofollow noreferrer noopener">Start with Adobe Colors</a></h5>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {colors.map((item, index) => (
                            <TextField
                                key={index}
                                label={item.choice}
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                name='colorChoice'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                }}
                                onChange={updateState(index)}
                            />
                    ))}
                </div>
                <br />
                <p>Choose up to five colors.</p>
                <br />
                <p>If using Adobe Colors:</p>
                <ul>
                    <li style={{ marginLeft: '30px' }}>Select a color palette</li>
                    <li style={{ marginLeft: '30px' }}>Note the six digit hex code for each color</li>
                    <li style={{ marginLeft: '30px' }}>Copy and paste the six digit hex code here</li>
                </ul>
                <br />
                <p>Your choices are not set in stone and more colors can be added upon request.</p>
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
                    Save Colors
                </Button>
            </>
        ) : (
            <>
                <h4>Colors saved.</h4>
                <br />
                <Button
                    onClick={() => setShowComponent(true)}
                    variant='contained'
                    fullWidth
                    style={{ backgroundColor: 'var(--mb1-1)', color: 'var(--char1)' }}
                >
                    Edit Colors
                </Button>
            </>
        )}
        </>
    )
}

export default ColorsOption