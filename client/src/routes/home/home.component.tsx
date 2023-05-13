import { HomeContainer } from "./home.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserData } from "../../store/slices/auth-slice";
function Home() {

    const currentUser = useSelector<RootState, UserData | null>(state => {
        return state.auth.currentUser
    })


    return <HomeContainer>
        { currentUser ? <h1>Logged In</h1>: <h1>Welcome to Todo App</h1>}
    </HomeContainer>
}

export default Home