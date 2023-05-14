import { HomeContainer } from "./home.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserData } from "../../store/slices/auth-slice";
import Todos from "../../components/todos/todos.component";
import NewTodo from "../../components/new-todo/new-todo.component";
function Home() {

    const currentUser = useSelector<RootState, UserData | null>(state => {
        return state.auth.currentUser
    })

    let content;

    if(!currentUser) {
       content = <h1>Welcome to Todo App</h1>
    } else {
        content = <><NewTodo/> <Todos/></>
    }


    return <HomeContainer>
      {content}
    </HomeContainer>
}

export default Home