import { useEffect, useState } from  "react"
import { fetcher } from  "../../helpers/fetcher"


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

    useEffect(() => {
        console.log(fetcher('users'))
    }, [])

    return(
        <>
            Users
        </>
    )
}