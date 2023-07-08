import React, { useState } from "react"
import { ContentStyles } from "./style"
import { MdExpandMore as Chevron } from "react-icons/md"
import { motion } from "framer-motion"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


const DropDownTextArea = ({ question, onChange, onClick }) => {
  const [showInfo, setInfo] = useState(true)

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
      <button 
        className="question" 
        // onClick={toggleInfo} 
        
      >
        {question}
        {/* <div className="trigger">
          <Chevron />
        </div> */}
      </button>
      {showInfo && (
        <motion.div
          initial="closed"
          animate={showInfo ? "open" : "closed"}
          variants={faqVariants}
          className="answer"
        >
          <TextField
            fullWidth
            multiline
            minRows={4}
            id="outlined-start-adornment"
            sx={{ mt: 1 }}
            name="contentItem"
            onChange={onChange}
          />
          {/* <Button
            onClick={onClick}
            variant='contained'
            sx={{ m: 1, width: '150px' }}
          >
            Save Content
          </Button> */}
        </motion.div>
      )}
    </ContentStyles>
  )
}

export default DropDownTextArea