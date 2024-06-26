import { Container } from "../../UI"
import { navBar } from "../../../common/constans"
import { Link } from "react-router-dom"
import classes from "./Footer.module.scss"

export const Footer = () => {

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.navbar}>
                        {navBar.map((navEl, i) => (
                            <Link to={navEl.url} key={i}>{navEl.title}</Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}