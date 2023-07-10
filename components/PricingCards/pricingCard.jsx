import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomBtn from '../Button';
import { useSession } from 'next-auth/react';

export default function PricingCard({ title, subtitle, price, priceDetail, etc, message, btnText, href, se1, se2, se3, se4, se5 }) {
    const { data: session } = useSession()

    return(
        <Card raised sx={{ minWidth: 275, minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(131deg, rgba(58,134,148,1) 18%, rgba(73,156,166,1) 100%)' }}>
                <div style={{ height: '15%', margin: '20px' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Oxygen' }}>
                    {title}
                    </Typography>
                </div>
                <div style={{ height: '25%', margin: '0px 20px' }}>
                    <Typography variant="p" sx={{ fontSize: 20, fontFamily: 'Oxygen' }} color="text.primary">
                    {subtitle}
                    </Typography>
                </div>
                <hr style={{ backgroundColor: 'var(--char4)', border: 'none', height: '2px', margin: '0px 20px' }}/>
                <Box style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    <Typography variant="h4" sx={{ mb: 1, fontFamily: 'Oxygen' }}>
                    {price}
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: 18, fontFamily: 'Oxygen' }} color="text.secondary">
                    {priceDetail}
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: 18, fontFamily: 'Oxygen' }} color="text.secondary">
                    {etc}
                    </Typography>
                    
                </Box>
            <CardActions sx={{ p: 0, ml: 2, mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* {session? (
                    <Button href='/get-started' variant='contained' color='inherit'>Get Started</Button>
                ) : (
                    <Stack direction='row' gap={1} mt={1}>
                        <CustomBtn 
                            href='/login'
                            arrow={false}
                            text='Login'
                        />
                        <p style={{ color: 'var(--char5)', fontSize: '1.25rem', fontWeight: '700' }}>or</p>
                        <CustomBtn 
                            href='/signup'
                            arrow={false}
                            text='Sign Up'
                        />
                        <p style={{ color: 'var(--char5a)', fontSize: '1.25rem', fontWeight: '700' }}>to start a free quote</p>
                    </Stack>
                )} */}
                <Button href='/free-quote' variant='contained' color='inherit'>Get a Free Quote</Button>
            </CardActions>
            <hr style={{ backgroundColor: 'var(--mb1-4)', border: 'none', height: '2px', margin: '20px' }}/>
            <Box style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--black)', padding: '20px' }}>
                <Typography variant="h4" sx={{ color: 'var(--mb1-4)', mb: 1 }}>
                    Standard Equipment:
                </Typography>
                <Typography variant="p" sx={{ fontSize: 22, color: 'var(--char0)', fontFamily: 'Oxygen' }}>
                    {se1}
                </Typography>
                <Typography variant="p" sx={{ fontSize: 22, color: 'var(--char0)', fontFamily: 'Oxygen' }}>
                    {se2}
                </Typography>
                <Typography variant="p" sx={{ fontSize: 22, color: 'var(--char0)', fontFamily: 'Oxygen' }}>
                    {se3}
                </Typography>
                <Typography variant="p" sx={{ fontSize: 22, color: 'var(--char0)', fontFamily: 'Oxygen' }}>
                    {se4}
                </Typography>
                <Typography variant="p" sx={{ fontSize: 22, color: 'var(--char0)', fontFamily: 'Oxygen' }}>
                    {se5}
                </Typography>
            </Box>
        </Card>
    )
}