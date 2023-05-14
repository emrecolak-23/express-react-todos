import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContainer, NavLinkContainer, NavLink, LogoContainer } from "./navigation.styles";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserData } from "../../store/slices/auth-slice";
import { useDispatch } from "react-redux";
import { signOut } from "../../store";
import { defaultState } from "../../store/slices/todo-slice";
function Navigation() {
    const dispatch = useDispatch()

    const currentUser = useSelector<RootState, UserData | null>(state => {
        return state.auth.currentUser
    })

    const handleSignOut = () => {
        dispatch<any>(signOut())
        dispatch<any>(defaultState())
    }

    let authLink;
    if (!currentUser) {
      authLink = <NavLink to="/auth">SIGN IN</NavLink>;
    } else {
      authLink = (
        <NavLink as="span" onClick={handleSignOut}>
          SIGN OUT
        </NavLink>
      );
    }  
    return <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                Todo App
            </LogoContainer>
            <NavLinkContainer>
                {authLink}
            </NavLinkContainer>
        </NavigationContainer>
        <Outlet/>
    </Fragment>
}

export default Navigation