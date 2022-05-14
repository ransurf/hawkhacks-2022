import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";
import firebase, { signInWithGoogle, signOut } from "../firebase/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: React.FC = () => {
    const [user, loading, error] = useAuthState(firebase.auth());

    const signInButton = () => {
        let onSignButtonClick;
        let buttonText;
        if (user) {
            onSignButtonClick = signOut;
            buttonText = "Sign Out";
        } else {
            onSignButtonClick = signInWithGoogle;
            buttonText = "Sign In";
        }
        return (
            <Button className="nav-link text-white" onClick={onSignButtonClick}>
                {buttonText}
            </Button>
        );
    };

    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xl">
                <Link href="/">
                    <a className="navbar-brand">Polymaths</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample07XL"
                    aria-controls="navbarsExample07XL"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarsExample07XL"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap"></li>
                    </ul>
                    {signInButton()}
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
