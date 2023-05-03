import * as React from "react"
import Link from "next/link"
import { MdArrowForward as Arrow } from "react-icons/md"
import { Styles } from "./style"

const Button = ({ text, to, href, arrow }) => {
  return (
    <Styles>
      <Link href={href} style={{ textDecoration: 'none' }}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
       : null }
       </Link>
    </Styles>
  )
}

export default Button