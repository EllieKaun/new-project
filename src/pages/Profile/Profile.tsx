import { Container } from "../../components/UI"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"
import { useState } from "react"
import classes from './Profile.module.scss'
import pfpDefault from '../../assets/images.png'

export const Profile = () => {

    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") as string) 


    const [userPfp, setUserPfp] = useState<string>(user.pfp ? user.pfp : pfpDefault)

    const navigate = useNavigate()

    const handleExit = () => {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }

    const handleAddPfp = (e: any) => {
        setUserPfp(URL.createObjectURL(e.target.files[0]))
        const updUser = {...user, pfp: URL.createObjectURL(e.target.files[0])}
        localStorage.setItem('user', JSON.stringify(updUser))
    }


    return (
        <>
            <Container>
                <input className={classes.input} id="pfp" type="file" onChange={handleAddPfp}/>
                <label htmlFor="pfp">
                    <img className={classes.pfp} src={userPfp}/>
                </label>
                <p>Name: {user?.userName?.value}</p>
                <p>Phone number: {user?.phoneNumber?.value}</p>
                <Button onClick={() => handleExit()}>Exit</Button>
            </Container>
        </>
    )
}