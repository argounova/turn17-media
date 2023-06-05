import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const fontChoices = [
    {
        choice: 'Font Choice 1',
    },
    {
        choice: 'Font Choice 2',
    },
]

const FontsOption = () => {
    return(
        <>
            <h2>Fonts</h2>
            <br />
            <p>Further customization comes in the form of choosing up to two fonts.  Keep in mind that each font has the ability to be italic, multiple weights and any size or color giving you a broad spectrum of creativity.</p>
            <br />
            <h5 style={{ color: 'var(--mb1-1)', textDecoration: 'underline' }}><a href="https://fonts.google.com/" target="_blank" rel="nofollow noreferrer noopener">Check out Google Fonts</a></h5>
            <br />
            {fontChoices.map((item) => (
                <TextField 
                    key={item.index}
                    label={item.choice}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                />
            ))}
            <br />
            <FormControlLabel sx={{ fontFamily: 'Oxygen' }} control={<Checkbox />} label="Check here to bypass this option and discuss colors later." />
        </>
    )
}

export default FontsOption