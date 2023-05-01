import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Icon from '@mui/material/Icon';

export default function DownArrow() {
    return(
        <>
            <div
                style={{
                    minHeight: '100vh',
                    minWidth: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Icon
                    style={{
                        color: 'var(--mb2-2)'                        
                    }}
                >
                    <ArrowDownwardIcon />
                </Icon>
            </div>
        </>
    )
}