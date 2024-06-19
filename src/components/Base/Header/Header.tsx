import { Container } from "../../UI"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import classes from './Header.module.scss'
import homeIcon from '../../../assets/home.svg'
import { CustomModal } from "../../UI/CustomModal/CustomModal"
import { useState } from "react"
import { Login } from "../Login/Login"
import { useNavigate } from "react-router-dom"


const navBar = [
    {
        title: 'posts',
        url: '/posts'
    },
    {
        title: 'comments',
        url: '/comments'
    },
    {
        title: 'albums',
        url: '/alboms'
    },
    {
        title: 'photos',
        url: '/photos'
    },
    {
        title: 'users',
        url: '/users'
    }
]

export const Header = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const user = localStorage.getItem('user')

    const navigate = useNavigate()

    return (
        <>
            <Container>
                <nav className={classes.wrapper}>
                    <Link to={"/"}><img src={homeIcon} alt="home" /></Link>
                    <div className={classes.navbar}>
                        {navBar.map((navEl, i) => (
                            <Link to={navEl.url} key={i}>{navEl.title}</Link>
                        ))}
                    </div>
                    {
                    !user ? 
                        <Button variant="contained" onClick={() => handleOpen()}>Sign up</Button>
                        : <Button onClick={() => navigate("/profile")}>Profile</Button>
                    }
                </nav>
            </Container>
            <CustomModal open={open} handleClose={handleClose}><Login /></CustomModal>
        </>
    )
}