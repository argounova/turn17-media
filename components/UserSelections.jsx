import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {
    Box,
    Button,
} from '@mui/material'
// import useSWR from 'swr'

 
const UserSelections = () => {
    const { data: session } = useSession()
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState('')
    const [showSelections, setShowSelections] = useState(false)
    const userEmail = session?.user.email
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const { data } = useSWR('/api/routes/userData', fetcher)
    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        const data = await(
            await fetch('/api/routes/userData')
        ).json()
        setUserData(data)
        findUser(userData)
    }

    const findUser = (userData) => {
        const searchIndex = userData.findIndex((user) => user.email === userEmail)
        setIndex(searchIndex)
    }

    const toggleSelections = () => {
        setShowSelections(showSelections => !showSelections)
    }

    return (
    <Box>
        <Button
            onClick={toggleSelections}
        >
            Display/Hide Current Project
        </Button>
        {showSelections && userData && (
            <>
                <h4>This is  your current project</h4>
                <h4>{userData[index].email}</h4>
            </>
        )}
        {showSelections && !userData && (
            <h4>Unable to fetch project</h4>
        )}
    </Box>
    )
}

export default UserSelections