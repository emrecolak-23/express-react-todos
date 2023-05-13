import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContainer, NavLinkContainer, NavLink, LogoContainer } from "./navigation.styles";

function Navigation() {

    let authLink = <NavLink to="/auth">SIGN IN</NavLink>;
  
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