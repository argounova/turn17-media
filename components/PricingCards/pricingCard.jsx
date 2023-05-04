import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PricingCard({ title, subtitle, price, etc, btnText, href }) {
    return(
        <Card sx={{ minWidth: 275, maxWidth: 400, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', background: 'linear-gradient(131deg, rgba(58,134,148,1) 18%, rgba(73,156,166,1) 100%)' }}>
                <div style={{ height: '15%' }}>
                    <Typography variant="h4">
                    {title}
                    </Typography>
                </div>
                <div style={{ height: '25%' }}>
                    <Typography variant="p" sx={{ fontSize: 20 }} color="text.primary">
                    {subtitle}
                    </Typography>
                </div>
                <hr/>
                <div style={{  }}>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                    {price}
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: 18 }} color="text.secondary">
                    {etc}
                    </Typography>
                </div>
            <CardActions sx={{ p: 0 }}>
                <Button href={href} color="inherit" variant="contained" disableElevation>{btnText}</Button>
            </CardActions>
        </Card>
    )
}