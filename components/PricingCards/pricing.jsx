import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PricingCard from "./pricingCard"
import pricingStructure from "./pricingStructure"

export default function PricingCards() {
    return(
        <Grid container justifyContent="center" mt="-2%">
            <Box
            sx={{
                p: 6,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
            }}
            >
            {pricingStructure.map((each) => (
                <PricingCard 
                key={each.tier}
                title={each.title}
                subtitle={each.subtitle}
                price={each.price}
                priceDetail={each.priceDetail}
                etc={each.etc}
                message={each.message}
                btnText={each.btnText}
                href={each.href}
                se1={each.se1}
                se2={each.se2}
                se3={each.se3}
                se4={each.se4}
                se5={each.se5}
                />
            ))}
            </Box>
      </Grid>
    )
}