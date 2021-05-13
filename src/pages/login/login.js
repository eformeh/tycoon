import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import CustomBtn from './../../components/CustomBtn';
import { Formik } from 'formik';
import {
    useHistory
} from "react-router-dom";
// import Redirect from "../../components/login/redirect"
// importing material-ui library into the login component
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import * as Yup from "yup";

const Login = () => {
    // here the username password can be stored using the declared arguments
    const [username, setUsername] = useState("");

    const [values, setValues] = React.useState({
        password: '',
        setPassword: '',
        showPassword: false,
        setShowPassword: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    //   };
    // this functions will help to toggle visible password to be invisible
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    // this function handle what happens after from is being submitted 
    function handleSubmit(event) {
        event.preventDefault();
    }
    // this function redirects the system to dashboard
    const history = useHistory();

    const redirect = () => {
        const validatedAdmin = { username: 'Admin', password: 'admin' };
        const User1 = { username: 'oyievesho@icloud.com', password: 'wisdom123' };
        const User2 = { username: 'sunday.Oladiran@thepfs.biz', password: 'Oladiran' };
        
        console.log('values => ', username, password)
        if (username === User1.username && password === User1.password) {
            history.push("/userdashboard")
            alert("you are user");
            console.log('values => ', username, password)
        } else if (username === validatedAdmin.username && password === validatedAdmin.password) {
            history.push("/admindashboard")
            alert("you are admin");
            console.log('values => ', username, password)
        }
        else if (username === User2.username && password === User2.password) {
            history.push("/admindashboard")
            alert("you are admin");
            console.log('values => ', username, password)
        }
        else {
            alert('Wrong username OR password');

        }


    }

    return (
        // formik handles all the constarints on the form 
        <Formik
            //********Handling validation messages using yum*******/
            validationSchema={
                Yup.object().shape({
                    password: Yup.string()
                        .required("Please provide your password.")
                        .min(8, "Password is too short - should be 8 chars minimum.")
                        .matches(/(?=.*[0-9])/, "Password must contain a number.")
                })
            }

        >


            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, handleClick }) => {
                    return (

                        <div className={"Login", 'wrapper'} >
                            <div className='form-wrapper'>

                                <h1>LOGIN PAGE</h1><br />
                                <Form onSubmit={handleSubmit} style={{ border: "outline 5px black" }}>
                                    <Form.Group size="lg" controlId="email">
                                        <TextField
                                            error={errors.username && touched.username}
                                            id="outlined-basic"
                                            label="Username"
                                            style={{ width: "272px" }}
                                            variant="outlined"
                                            onChange={(e) => {
                                                setUsername(e.target.value)
                                            }} />
                                    </Form.Group>
                                    <br /><br /><br /><br />
                                    <Form.Group size="lg" controlId="password">
                                        <TextField

                                            error={errors.password && touched.password && "error"}
                                            id="outlined-basic"
                                            type={showPassword ? "text" : "password"}
                                            label="Password"
                                            style={{ width: "272px" }}
                                            variant="outlined"
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}

                                            InputProps={{
                                                endAdornment: (<InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>)
                                            }
                                            } />
                                    </Form.Group>
                                    <br /><br /><br /><br />
                                    <CustomBtn className='button' type="submit" label="login" onClick={redirect} disabled={isSubmitting} />
                                </Form>
                            </div>
                        </div>

                    )
                }}
        </Formik>
    );
}

export default Login;