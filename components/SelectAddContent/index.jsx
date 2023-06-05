import { Box, Grid } from '@mui/material'
import { ContentStyles } from './style'
import DropDownInput from './DropDownInput'
import DropDownTextArea from './DropDownText'
import dropDownTextQuestions from './dropDownTextQuestions'

const Content = () => {
    return(
        <ContentStyles>
            <h1>Add content and additional info</h1>
            <br />
            <div className='content-container'>
                <p>Listed below is a series of selections that can be made to add information about you and your company as well as any content that might make its way to the website &#40;i.e., “About” paragraph, contact info, navigation links&#41;.  As with Colors and Fonts, this information can be edited later and even bypassed at this time.  However, the more you can provide and the more accurate the information, the better our foundation for getting started.</p>
                <Grid container justifyContent="flex-start">
                    <Box
                        sx={{
                            p: {
                                xs: 2,
                                lg: 0,
                            },
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr' },
                            gap: 2,
                            width: '100%'
                        }} 
                    >
                        <DropDownInput 
                            question='Single page sites still offer a navigation menu.  What should we name these links?  Provide up to four and remember that “Home” is redundant so consider links such as “About”, “Contact”, “Gallery”.'
                        />
                        {dropDownTextQuestions.map((item) => (
                            <DropDownTextArea 
                                question={item.question}
                            />
                        ))}
                    </Box>
                </Grid>
            </div>
        </ContentStyles>
    )
}

export default Content