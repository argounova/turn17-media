import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Faq from "./faqItem";
import questions from './questions';

export default function FaQuestions() {
    return(
        <>
        <Grid container justifyContent="center">
            <Box
            sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                width: '75%'
            }}
            
            >
            {questions.map((each) => (
                <Faq 
                    key={each.id}
                    question={each.question}
                    answer={each.answer}
                />
            ))}
            </Box>
        </Grid>
        </>
    )
}