import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
// import useSWR from 'swr'

 
const UserSelections = () => {
    const { data: session } = useSession()
    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState('')
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
        console.log(data)
        console.log(userData)
        findUser(data)
    }

    const findUser = (data) => {
        const searchIndex = data.findIndex((user) => user.email === userEmail)
        setIndex(searchIndex)
        console.log(index)
    }

    return (
    <div>

    </div>
    )
}

export default UserSelections