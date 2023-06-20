import * as React from 'react';
import { BasicsStyles } from "./style" 
import { useState } from "react"
import { tabs } from './templates'
import { motion, AnimatePresence } from "framer-motion"
import { useSession } from 'next-auth/react'
import { 
  Box,
  Button,
  Container,
  RadioGroup,
} from '@mui/material';
import TemplateRow from './TemplateRow'


export default function Selector() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [selectedValue, setSelectedValue] = useState('')
  const [showComponent, setShowComponent] = useState(true)

  const handleSave = () => {
    const postData = async () => {
        const data = {
            email: session.user.email,
            template: selectedValue
        }
        const response = await fetch('/api/routes/templateRoute', {
            method: 'PUT',
            body: JSON.stringify(data),
        })
        return response.json()
    }
    postData().then((data) => {
        setShowComponent(false)
    })
  }

  return (
    <>
      {showComponent? (
        <BasicsStyles >
          <h1>Select a template</h1>
          <br />
          <nav>
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={tab === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab.name}
                  {tab === selectedTab ? (
                    <motion.div 
                        className="underline" 
                        layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <br />
                <h1>{selectedTab.title}</h1>
                <h5>{selectedTab.subtitle}</h5>
                <br />
                <hr />
                <br />
                <Container>
                  <Box>
                    <RadioGroup>
                      {selectedTab.sites.map((site, index) => (
                        <TemplateRow 
                          key={index}
                          templateTitle={site.title}
                          templateSummary={site.description}
                          templateThumb={site.thumbnail}
                          value={site.title}
                          onChange={(e) => setSelectedValue(e.target.value)}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                </Container>

                <div className="button-div">
                    <Button
                      onClick={handleSave}
                      variant='contained'
                      style={{ backgroundColor: 'var(--mb1-3)', color: 'var(--char5)' }}
                    >Save Selection</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </BasicsStyles>
        ) : (
        <BasicsStyles>
          <h1>Select a template</h1>
          <br />
          <div className='template-container'>
              <h4>
                  Template saved.
              </h4>
              <br />
              <Button
                  onClick={() => setShowComponent(true)}
                  variant='contained'
                  fullWidth
                  style={{ backgroundColor: 'var(--mb1-1)', color: 'var(--char1)' }}
              >
                  Edit Template
              </Button>
          </div>
          <br />
        </BasicsStyles>
      )}
    </>
  )
}
