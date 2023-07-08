import { OptionsStyles } from "./style"
import ColorsOption from "./Colors"
import FontsOption from "./Fonts"
import LinksOption from "./Links"
import Divider from '@mui/material/Divider'


const SelectOptions = () => {
    return(
        <OptionsStyles>
            <div className='options-container'>
                <ColorsOption />
                <br />
                <Divider style={{ width: '100%' }}/>
                <br />
                <FontsOption />
                {/* <br />
                <Divider style={{ width: '100%' }}/>
                <br />
                <LinksOption /> */}
            </div>
        </OptionsStyles>
    )
}

export default SelectOptions