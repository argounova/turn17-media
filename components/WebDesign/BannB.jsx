import { WebDesignStyles } from "./style"
import {
  Container,
  Typography
} from "@mui/material"
import DownArrow from "../DownArrow"


const BannB = () => {
  return (
    <WebDesignStyles>
      <Container sx={{ minWidth: '100vw', height: '200px', backgroundColor: 'var(--char5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ color: 'var(--white)', letterSpacing: '0.5rem' }}>
          Choose a single page or a multi page website.
        </Typography>
      </Container>
      <DownArrow />
    </WebDesignStyles>
  )
}

export default BannB