import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PricingCard from "./pricingCard"
import pricingStructure from "./pricingStructure"

export default function PricingCards() {
    return(
        <Grid container spacing={2} justifyContent="center">
            <Box
            sx={{
                p: 6,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                gap: 2,
            }}
            >
            {pricingStructure.map((each) => (
                <PricingCard 
                key={each.tier}
                title={each.title}
                subtitle={each.subtitle}
                price={each.price}
                etc={each.etc}
                btnText={each.btnText}
                />
            ))}
            </Box>
      </Grid>
    )
}