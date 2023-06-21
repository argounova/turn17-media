import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

 
const UserSelections = () => {
    const { data: session } = useSession()
    // const [isReady, setIsReady] = useState(false)
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState('')
    const userEmail = session?.user.email
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const { data } = useSWR('/api/routes/userData', fetcher)
    

    useEffect(() => {
        
        
        getData()
    }, [])

    const getData = async () => {
        const data = await(
            await fetch('/api/routes/userData')
        ).json()
        setUserData(data)
        console.log(data)
        console.log(userData)
        findUser(data)
    }

    const findUser = (data) => {
        const searchIndex = data.findIndex((user) => user.email === userEmail)
        setIndex(searchIndex)
        console.log(index)
    }

    
    // console.log(userData
    // console.log(searchIndex)
    // setIsReady(true)

    // if (!isReady) return <p>Loading...</p>
    // if (error) return <p>No profile data</p>

    return (
    <div>
        <h1>My name is </h1>
        {/* <p>My template choice is: {userData[searchIndex].template}</p> */}
        {/* <p>Color bypass?: {userData[searchIndex].colorBypass}</p> */}
    </div>
    )
    }

export default UserSelections