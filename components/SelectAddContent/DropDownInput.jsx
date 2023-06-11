import React, { useState } from "react"
import { useSession } from 'next-auth/react'
import { ContentStyles } from "./style"
import { MdExpandMore as Chevron } from "react-icons/md"
import { motion } from "framer-motion"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import dropDownLabels from "./dropDownInputs";

const DropDownInput = ({ question }) => {
  const { data: session } = useSession()
  const [showInfo, setInfo] = useState(false)
  const [navLink, setNavLink] = useState(dropDownLabels)
  let navLinkChoices = []

  const updateState = (index) => (e) => {
    navLinkChoices = navLink.map((item, i) => {
        if (index === i) {
            return { ...item, [e.target.name]: e.target.value }
        } else {
            return item
        }
    })
    setNavLink(navLinkChoices)
  }

  const handleSave = () => {
    const postData = async () => {
        const data = {
            email: session.user.email,
            navLinks: navLink,
        }
        const response = await fetch('/api/routes/navLinksRoute', {
            method: 'PUT',
            body: JSON.stringify(data),
        })
        return response.json()
    }
    postData().then((data) => {
      toggleInfo()
    })
  }

  const faqVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  }

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  return (
    <ContentStyles className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
      <button className="question" onClick={toggleInfo}>
        {question}
        <div className="trigger">
          <Chevron />
        </div>
      </button>
      {showInfo && (
        <motion.div
          initial="closed"
          animate={showInfo ? "open" : "closed"}
          variants={faqVariants}
          className="answer"
        >
          {dropDownLabels.map((item, index) => (
            <TextField 
              key={item.index}
              label={item.label}
              id="outlined-start-adornment"
              sx={{ m: 1, width: '35ch' }}
              name="navLink"
              onChange={updateState(index)}
            />
          ))}
          <Button
                onClick={handleSave}
                variant='contained'
                sx={{ m: 1, width: '150px' }}
            >
                Save Links
            </Button>
        </motion.div>
      )}
    </ContentStyles>
  )
}

export default DropDownInput