import { Container } from "../../UI"
import { Link } from "react-router-dom"

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


    return (
        <Container>
            <nav>
                {navBar.map((navEl, i) => (
                    <Link to={navEl.url} key={i}>{navEl.title}</Link>
                ))}
            </nav>
        </Container>
    )
}