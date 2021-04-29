import Navbar from "../components/Navbar"
import { Container } from "@material-ui/core";
import Player from "../components/Player";

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{ margin: '90px auto' }}>
                {children}
            </Container>
            <Player />
        </>
    )
}

export default MainLayout;
