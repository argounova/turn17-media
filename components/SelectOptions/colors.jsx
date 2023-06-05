import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const colorChoices = [
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
    return(
        <>
            <h2>Colors</h2>
            <br />
            <p>Arguably the most impactful element of your website is the color palette as this sets the overall tone and personality.  It can be difficult to narrow down all of the colors in the rainbow to only five but a cohesive site typically won&apos;t have more than that.</p>
            <br />
            <h5 style={{ color: 'var(--mb1-1)', textDecoration: 'underline' }}><a href="https://color.adobe.com/explore" target="_blank" rel="nofollow noreferrer noopener">Start with Adobe Colors</a></h5>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {colorChoices.map((item) => (
                        <TextField
                            key={item.index}
                            label={item.choice}
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">#</InputAdornment>,
                            }}
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
            <FormControlLabel sx={{ fontFamily: 'Oxygen' }} control={<Checkbox />} label="Check here to bypass this option and discuss colors later." />
        </>
    )
}

export default ColorsOption