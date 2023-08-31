import * as React from 'react'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import { BasicsStyles } from "./style" 
import { useState } from "react"
import { tabs } from './tabs'
import { motion, AnimatePresence } from "framer-motion"
import { 
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import emailjs from '@emailjs/browser'


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

export default function QuoteSelections() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [siteEx, setSiteEx] = useState(siteExamples)
  const [sitePurpose, setSitePurpose] = useState('')
  const [siteVisitors, setSiteVisitors] = useState('')
  const [siteAudience, setSiteAudience] = useState('')
  const [siteRedesign, setSiteRedesign] = useState('')
  const [siteHosting, setSiteHosting] = useState('')
  const [siteDomain, setSiteDomain] = useState('')
  const [siteTechnicalReqs, setSiteTechnicalReqs] = useState('')
  const [siteTimeline, setSiteTimeline] = useState('')
  const [siteBudget, setSiteBudget] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientCompany, setClientCompany] = useState('')
  const [clientNameEntered, setClientNameEntered] = useState(null)
  const [isValid, setIsValid] = useState(null)
  let siteExs = []
  const templateParams = {
    user_name: clientName,
    user_email: clientEmail,
  }

  const updateSiteExState = (index) => (e) => {
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
          name: clientName,
          email: clientEmail,
          clientCompany: clientCompany,
          siteType: selectedTab.name,
          siteCost: selectedTab.cost,
          siteExs: siteEx,
          projectStatus: 'Not started',
          etc: '00/00/2023',
          onTrack: 'ON TRACK',
          sitePurpose: sitePurpose,
          siteVisitors: siteVisitors,
          siteAudience: siteAudience,
          siteRedesign: siteRedesign,
          siteHosting: siteHosting,
          siteDomain: siteDomain,
          siteTechnicalReqs: siteTechnicalReqs,
          siteTimeline: siteTimeline,
          siteBudget: siteBudget,
        }
        const response = await fetch('/api/routes/quoteRoute', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        return response.json()
    }
    postData().then((data) => {
      location.replace('/submission?status=success')
    })
    emailjs.send('service_l8xkawv', 'turn17media_quote', templateParams, 'd-nj0U9pmkBW1-kef')
  }

  return (
    <BasicsStyles >
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
            <h2 style={{ fontFamily: 'audiowide' }}>{selectedTab.title}</h2>
            <h5 style={{ color: 'var(--char3)' }}>{selectedTab.subtitle}</h5>
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
                        onChange={updateSiteExState(index)}
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
            {/* <FormControlLabel 
              sx={{ fontFamily: 'Oxygen' }} 
              control=
              {<Checkbox 
                  onChange={(e) => setBypass(e.target.checked)}
              />} 
              label="Check here to bypass this option and discuss site style later." /> */}
              <br />
              <h2>{selectedTab.question1}</h2>
              <p style={{ color: 'var(--char3)' }}>{selectedTab.subtext1}</p>
              <TextField
                fullWidth
                multiline
                minRows={4}
                id="outlined-start-adornment"
                sx={{ mt: 1 }}
                name="sitePurpose"
                onChange={(e) => {setSitePurpose(e.target.value)}}
              />
              <br />
              <br />
              <h2>{selectedTab.question2}</h2>
              <p style={{ color: 'var(--char3)' }}>{selectedTab.subtext2}</p>
              <TextField
                fullWidth
                multiline
                minRows={4}
                id="outlined-start-adornment"
                sx={{ mt: 1 }}
                name="siteVisitors"
                onChange={(e) => {setSiteVisitors(e.target.value)}}
              />
              <br />
              <br />
              <h2>{selectedTab.question3}</h2>
              <p style={{ color: 'var(--char3)' }}>{selectedTab.subtext3}</p>
              <TextField
                fullWidth
                multiline
                minRows={4}
                id="outlined-start-adornment"
                sx={{ mt: 1 }}
                name="siteAudience"
                onChange={(e) => {setSiteAudience(e.target.value)}}
              />
              <br />
              <br />
              <h2>{selectedTab.question4}</h2>
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="siteRedesign"
                  // value={value}
                  onChange={(e) => {setSiteRedesign(e.target.value)}}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="YES" />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <h2>{selectedTab.question5}</h2>
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="siteHostingInPlace"
                  // value={value}
                  onChange={(e) => {setSiteHosting(e.target.value)}}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="YES" />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <h2>{selectedTab.question6}</h2>
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="siteDomainOwned"
                  // value={value}
                  onChange={(e) => {setSiteDomain(e.target.value)}}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="YES" />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <h2>{selectedTab.question7}</h2>
              <p style={{ color: 'var(--char3)' }}>{selectedTab.subtext7}</p>
              <TextField
                fullWidth
                multiline
                minRows={4}
                id="outlined-start-adornment"
                sx={{ mt: 1 }}
                name="siteTechnicalReqs"
                onChange={(e) => {setSiteTechnicalReqs(e.target.value)}}
              />
              <br />
              <br />
              <h2>{selectedTab.question8}</h2>
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="siteTimeline"
                  // value={value}
                  onChange={(e) => {setSiteTimeline(e.target.value)}}
                >
                  <FormControlLabel value="asap" control={<Radio />} label="ASAP" />
                  <FormControlLabel value="4to6weeks" control={<Radio />} label="4-6 weeks" />
                  <FormControlLabel value="1to2months" control={<Radio />} label="1-2 months" />
                  <FormControlLabel value="furtherOut" control={<Radio />} label="Further out" />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <h2>{selectedTab.question9}</h2>
              <FormControl>
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  name="siteBudget"
                  // value={value}
                  onChange={(e) => {setSiteBudget(e.target.value)}}
                >
                  <FormControlLabel value="less" control={<Radio />} label="Less" />
                  <FormControlLabel value="800to1200" control={<Radio />} label="$800 - $1200" />
                  <FormControlLabel value="1300to1800" control={<Radio />} label="$1300 - $1800" />
                  <FormControlLabel value="2000to2500" control={<Radio />} label="$2000 - $2500" />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              <h2>Please provide your contact information.</h2>
              {clientNameEntered? (
                <TextField
                  sx={{ mt: 1, width: '50ch', maxWidth: '100%' }}
                  onChange={(e) => {
                    setClientNameEntered(false)
                    const val = e.target.value
                    if(!isEmpty(val)) {
                      setClientNameEntered(true)
                      setClientName(val)}}
                    }
                  label='Name'
                  required
                  name='clientName'
                />
              ) : (
                <TextField
                  sx={{ mt: 1, width: '50ch', maxWidth: '100%' }}
                  onChange={(e) => {
                    setClientNameEntered(false)
                    const val = e.target.value
                    if(!isEmpty(val)) {
                      setClientNameEntered(true)
                      setClientName(val)}}
                    }
                  label='Name'
                  required
                  name='clientName'
                  error
                  helperText='Name required.'
                />
              )}
              {isValid? (
                <TextField
                  sx={{ mt: 1, width: '50ch', maxWidth: '100%' }}
                  onChange={(e) => {
                    setIsValid(false)
                    const val = e.target.value
                    if(isEmail(val)) {
                      setIsValid(true)
                      setClientEmail(val)
                    }
                  }}
                  label='Email'
                  required
                  name='clientEmail'
                />
              ) : (
                <TextField
                  sx={{ mt: 1, width: '50ch', maxWidth: '100%' }}
                  onChange={(e) => {
                    setIsValid(false)
                    const val = e.target.value
                    if(isEmail(val)) {
                      setIsValid(true)
                      setClientEmail(e.target.value)
                    }
                  }}
                  label='Email'
                  required
                  name='clientEmail'
                  error
                  helperText='Email required.'
                />
              )}
              <TextField
                sx={{ mt: 1, width: '50ch', maxWidth: '100%' }}
                onChange={(e) => {setClientCompany(e.target.value)}}
                label='Company'
                name='clientCompany'
              />
            <br />
            <br />
            {isValid && clientNameEntered ? (
              <Button
              fullWidth
              onClick={handleSave}
              variant='contained'
              className='save-btn'
              >
                Submit
              </Button>
            ) : (
              <Button
                fullWidth
                disabled
                variant='contained'
                className='save-btn'
              >
                Submit
              </Button>
            )}
            </Box>
          </motion.div>
        </AnimatePresence>
      </main>
    </BasicsStyles>
  )
}
