import { WebDesignStyles } from "./style"
import {
  Container,
  Typography
} from "@mui/material"
import DownArrow from "../DownArrow"


const BannB = () => {
  return (
    <WebDesignStyles>
      <Container className="bannB__container-main">
        <Typography variant="h2" align="center" sx={{ color: 'var(--white)', letterSpacing: '0.2rem' }}>
          Single and multi page websites.
        </Typography>
      </Container>
      <DownArrow />
    </WebDesignStyles>
  )
}

export default BannB