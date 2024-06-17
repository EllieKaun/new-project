import { TextField, Button } from "@mui/material"
import classes from './Login.module.scss'
import { useState } from "react"


export const Login = () => {

    const [loginData, setLoginData] = useState({
        userName: '',
        phoneNumber: ''
    })


    const handleAddUser = () => {
        localStorage.setItem('user', JSON.stringify(loginData))
        window.location.reload()
    }

    return (
        <div className={classes.wrapper}>
            <p>Login</p>
            <div className={classes.inputWrapper}> 
                <TextField onChange={(e) => {
                    setLoginData((prev) => ({...prev, userName: e.target.value}))
                }} error={false} variant="filled" label="username"/>
                <TextField onChange={(e) => {
                    setLoginData((prev) => ({...prev, phoneNumber: e.target.value}))
                }} error={false} variant="filled" label="phone number"/>
            </div>
            <Button variant="contained" onClick={() => handleAddUser()}>Login</Button>
        </div>
    )
}