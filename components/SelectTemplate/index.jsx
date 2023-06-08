import * as React from 'react'
import { TemplateStyles } from './style'
import TemplateRow from './TemplateRow'
import { singlePageTemplates } from './templates'
import Button from '@mui/material/Button'
import RadioGroup from '@mui/material/RadioGroup'
import { useSession } from 'next-auth/react'

const Template = () => {
    const { data: session } = useSession()
    const [selectedValue, setSelectedValue] = React.useState('')
    const handleSave = () => {
        const postData = async () => {
            const data = {
                email: session.user.email,
                template: selectedValue
            }
            const response = await fetch('/api/routes/templateRoute', {
                method: 'PUT',
                body: JSON.stringify(data),
            })
            return response.json()
        }
        postData().then((data) => {
            alert(selectedValue + ' template saved!')
        })
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
                        onChange={(e) => setSelectedValue(e.target.value)}
                    />
                ))}
                </RadioGroup>
                <Button
                    onClick={handleSave}
                    variant='contained'
                >
                    Save Selection
                </Button>
            </div>
        </TemplateStyles>
    )
}

export default Template