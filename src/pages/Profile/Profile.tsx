import { Container } from "../../components/UI"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"


export const Profile = () => {

    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") as string) 

    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!user){
    //         navigate("/")
    //     }
    // }, [])

    const handleExit = () => {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }

    return (
        <>
            <Container>
                <p>Name: {user?.userName?.value}</p>
                <p>Phone number: {user?.phoneNumber?.value}</p>
                <Button onClick={() => handleExit()}>Exit</Button>
            </Container>
        </>
    )
}