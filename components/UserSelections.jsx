import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

 
const UserSelections = () => {
    const { data: session } = useSession()
    const [isReady, setIsReady] = useState(false)
    const userEmail = session?.user.email
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/routes/userData', fetcher)
    console.log(data)
    const searchIndex = data.findIndex((user) => user.email === userEmail) 
    console.log(searchIndex)
    // setIsReady(true)

    if (!isReady) return <p>Loading...</p>
    if (error) return <p>No profile data</p>

    return (
    <div>
        <h1>My name is {data.name}</h1>
        {/* <p>My template choice is: {userData[searchIndex].template}</p> */}
        {/* <p>Color bypass?: {userData[searchIndex].colorBypass}</p> */}
    </div>
    )
    }

export default UserSelections