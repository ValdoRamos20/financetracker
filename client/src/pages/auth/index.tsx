import {
    SignedIn,
    SignedOut,
    SignIn,
    SignInButton,
    SignUpButton,
    UserButton
} from '@clerk/clerk-react'
import {Navigate} from "react-router-dom"

export const Auth = () => {
    return (
        <div className='sign-in-container'>
            <SignedOut>
                <SignUpButton mode='modal'/>
                <SignInButton mode='modal'/>
            </SignedOut>
            <SignedIn>
                <Navigate to="/">

                </Navigate>
            </SignedIn>
        </div>
    )
}
