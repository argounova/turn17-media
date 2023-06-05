import { OptionsStyles } from "./style"
import ColorsOption from "./colors"
import FontsOption from "./fonts"
import Divider from '@mui/material/Divider'


const Options = () => {
    return(
        <OptionsStyles>
            <h1>Choose your options</h1>
            <br />
            <div className='options-container'>
                <ColorsOption />
                <br />
                <Divider style={{ width: '100%' }}/>
                <br />
                <FontsOption />
            </div>
        </OptionsStyles>
    )
}

export default Options