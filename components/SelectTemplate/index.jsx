import * as React from 'react'
import { TemplateStyles } from './style'
import TemplateRow from './TemplateRow'
import { singlePageTemplates } from './templates'
import RadioGroup from '@mui/material/RadioGroup'

const Template = () => {
    const [selectedValue, setSelectedValue] = React.useState('')
    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedValue(e.target.value)
    }
    
    return(
        <TemplateStyles>
            <h1 style={{ marginTop: '80px' }}>Select a template</h1>
            <br />
            <div className='template-container'>
                <RadioGroup>
                {singlePageTemplates.map((item, index) => (
                    <TemplateRow 
                        key={index}
                        templateTitle={item.title}
                        templateSummary={item.summary}
                        templateThumb={item.thumbnail}
                        value={item.title}
                        onChange={handleChange}
                    />
                ))}
                </RadioGroup>
            </div>
        </TemplateStyles>
    )
}

export default Template