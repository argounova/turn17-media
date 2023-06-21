import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
 
const UserSelections = () => {
    const { data: session } = useSession()
    const userEmail = session?.user.email
    console.log('the email of current user is: ' + userEmail)
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
    setLoading(true)
    fetch('/api/routes/userData')
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        setLoading(false)
        })
    }, [])

        const userData = JSON.parse(JSON.stringify(data.users))
        const searchIndex = userData.findIndex((user) => user.email === userEmail)
        console.log(userData[searchIndex])

    

    // console.log('The array of user data is: ' + userData[0].email)
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
    <div>
        <h1>My name is {userData[searchIndex].name}</h1>
        <p>My template choice is: {userData[searchIndex].template}</p>
    </div>
    )
    }

export default UserSelections