import React, { useState } from "react"
import { FaqStyles } from "./style"
import { MdExpandMore as Chevron } from "react-icons/md"
import { motion } from "framer-motion"

const Faq = ({ question, answer }) => {
  const [showInfo, setInfo] = useState(false)

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
    <FaqStyles className={showInfo ? `${"faq-open"}` : `${"faq-closed"}`}>
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
          {answer}
        </motion.div>
      )}
    </FaqStyles>
  )
}

export default Faq