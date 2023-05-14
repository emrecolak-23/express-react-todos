import { HomeContainer } from "./home.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserData } from "../../store/slices/auth-slice";
import Todos from "../../components/todos/todos.component";
import NewTodo from "../../components/new-todo/new-todo.component";
import Spinner from "../../components/spinner/spinner.component";

function Home() {

    const [currentUser, isLoading] = useSelector<RootState, [UserData | null, boolean]>(state => {
        return [state.auth.currentUser, state.auth.isLoading]
    })

    let content;

    if(!currentUser) {
       content = isLoading ? <Spinner/> : <h1>Welcome to Todo App</h1>
    } else {
        content = <><NewTodo/> <Todos/></>
    }

    return <HomeContainer>
      {content}
    </HomeContainer>
}

export default Home