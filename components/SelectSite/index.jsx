import * as React from 'react';
import { BasicsStyles } from "./style" 
import { useState } from "react"
import { tabs } from './templates'
import { motion, AnimatePresence } from "framer-motion"
import { useSession } from 'next-auth/react'
import { 
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  RadioGroup,
  TextField,
} from '@mui/material';
import TemplateRow from './TemplateRow'


export const siteExamples = [
  {
    example: 'Website Example 1'
  },
  {
    example: 'Website Example 2'
  },
  {
    example: 'Website Example 3'
  },
]


export default function Selector() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [selectedValue, setSelectedValue] = useState('')
  const [showComponent, setShowComponent] = useState(true)
  const [bypass, setBypass] = useState(false)
  const [siteEx, setSiteEx] = useState(siteExamples)
  let siteExs = []

  const updateState = (index) => (e) => {
    siteExs = siteEx.map((item, i) => {
        if (index === i) {
            return { ...item, [e.target.name]: e.target.value }
        } else {
            return item
        }
    })
    setSiteEx(siteExs)
  }

  const handleSave = () => {
    const postData = async () => {
        const data = {
            email: session.user.email,
            siteType: selectedTab.name,
            siteCost: selectedTab.cost,
            siteExs: siteEx,
            siteExBypass: bypass,
            projectStatus: 'Not started',
            etc: '00/00/2023',
            onTrack: 'ON TRACK'
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
          <h1>Site Selection & Examples</h1>
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
                style={{ width: '90%' }}
              >
                <br />
                <h1>{selectedTab.title}</h1>
                <h5>{selectedTab.subtitle}</h5>
                <br />
                <hr />
                <br />
                <Container disableGutters>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {siteExamples.map((item, index) => (
                        <TextField 
                            key={index}
                            label={item.example}
                            id="outlined-start-adornment"
                            fullWidth
                            margin='normal'
                            name='siteEx'
                            onChange={updateState(index)}
                        />
                  ))}
                    {/* <RadioGroup>
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
                    </RadioGroup> */}
                  </Box>
                </Container>
                <br />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel 
                  sx={{ fontFamily: 'Oxygen' }} 
                  control=
                  {<Checkbox 
                      onChange={(e) => setBypass(e.target.checked)}
                  />} 
                  label="Check here to bypass this option and discuss site style later." />
                <Button
                  onClick={handleSave}
                  variant='contained'
                  sx={{ width: 'fit-content' }}
                >
                  Save Selection
                </Button>
                </Box>
              </motion.div>
            </AnimatePresence>
          </main>
        </BasicsStyles>
        ) : (
        <BasicsStyles>
          <h1>Site Selection & Examples</h1>
          <br />
          <div className='template-container'>
              <h4>
                  Site selection and examples saved.
              </h4>
              <br />
              <Button
                  onClick={() => setShowComponent(true)}
                  variant='contained'
                  fullWidth
                  style={{ backgroundColor: 'var(--mb1-1)', color: 'var(--char1)' }}
              >
                  Edit Examples
              </Button>
          </div>
          <br />
        </BasicsStyles>
      )}
    </>
  )
}
