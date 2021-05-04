import React, { useState } from 'react'
import {
    useHistory
} from "react-router-dom";

const Redirect = () => {
    const [username, setUsername] = useState("");

    const [values, setValues] = React.useState({
        password: '',
        setPassword: '',
        showPassword: false,
        setShowPassword: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const history = useHistory();
    const validatedAdmin = { username: 'Admin', password: 'admin' };
    const User = { username: 'Wisdom', password: 'wisdom123' };
    console.log('values => ', username, password)
    if (username === User.username && password === User.password) {
        history.push("/userdashboard")
        alert("you are user");
        console.log('values => ', username, password)
    } else if (username === validatedAdmin.username && password === validatedAdmin.password) {
        history.push("/admindashboard")
        alert("you are admin");
        console.log('values => ', username, password)
    }
    else {
        alert('Wrong username OR password');

    }


}

export default Redirect
