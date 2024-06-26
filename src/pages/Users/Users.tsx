import { useEffect, useState } from  "react"
import { fetcher } from  "../../helpers/fetcher"
import { Container } from "../../components/UI"
import { UserCard } from "../../components/UI/UserCard/UserCard"
import classes from './Users.module.scss'
import { Skeleton } from "@mui/material"

interface UsersData{
     id: number,
     name: string,
     username: string,
     email: string,
     address: {
       street: string,
       suite: string,
       city: string,
       zipcode: string,
       geo: {
         lat: string,
         lng: string 
      }
    },
     phone: string,
     website: string,
     company: {
       name:  string,
       catchPhrase: string,
       bs: string 
    }
  
}

export const Users = () => {

    const [users, setUsers] = useState<[] | UsersData[]>([])


    const handleFetch = async () => {
        const result = await fetcher('users')
        setUsers(result)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    
    return(
        <Container>
            <>
                <p>Users</p>
                <div className={classes.wrapper}>
                    {users.length > 0 ?
                        users?.map((item) => (
                            <UserCard userData={item} key={item.id}/>
                        )) : Array.from({length: 20}).map(() => (
                            <Skeleton variant="rounded" width={170} height={220}/>
                        ))
                    }
                </div>
            </>
        </Container>
    )
}