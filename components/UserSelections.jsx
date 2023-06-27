import { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
    Box,
    Button,
} from '@mui/material'

 
const UserSelections = () => {
    const { data: session } = useSession()
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState('')
    const [showSelections, setShowSelections] = useState(false)
    const userEmail = session?.user.email
    
    const getData = () => {
        fetch('/api/routes/userData')
        .then(response => response.json())
        .then(data => {
            const index = data.findIndex((user) => user.email === userEmail)
            setUserData(data)
            setIndex(index)
            toggleSelections()
        })
    }

    const toggleSelections = () => {
        setShowSelections(showSelections => !showSelections)
    }

    return (
    <Box>
        <Button
            onClick={getData}
        >
            Display/Hide Current Project
        </Button>
        {showSelections && userData && (
            <>
                <h4>Current project:</h4>
                <br />
                <p>{userData[index].email}</p>
                <p>{userData[index].template}</p>
                <p>{userData[index].colorChoices[0].colorChoice}</p>
                <p>{userData[index].fontChoices[0].fontChoice}</p>
                <p>{userData[index].navLinks[0].navLink}</p>
                <p>{userData[index].contentArea[0].contentItem}</p>
            </>
        )}
        {showSelections && !userData && (
            <h4>Unable to fetch project</h4>
        )}
    </Box>
    )
}

export default UserSelections