import { useState } from 'react'
import {
  Button
} from '@mui/material'
import SelectContent from './SelectAddContent'
import SelectOptions from './SelectOptions'
import SelectSite from './SelectSite'


const Quote = ({  }) => {
  const [showSelectSite, setShowSelectSite] = useState(true)
  const [showSelectOptions, setShowSelectOptions] = useState(false)
  const [showSelectContent, setShowSelectContent] = useState(false)


  return(
    <>
      {showSelectSite && (
        <>
          <SelectSite />
          <SelectOptions />
          <SelectContent />
        </>
      )}        
    </>
  )
}

export default Quote