import { SignInContainer } from "./sign-in-form.styles";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";

const defaultFormFields = {
    email: '',
    password: ''
}

function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

   return <SignInContainer>
    <h2>Already have an account</h2>
    <span>Sign in with your email and password</span>
    <form>
        <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            />
        <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            />
        <Button type="submit">Sign In</Button>
    </form>
   </SignInContainer>
}

export default SignInForm