import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const AdminLogin = () => {
const [passwordInput, setPasswordInput] = useState('');
const history = useHistory();

const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
}

const handleLogin = (event) => {
    event.preventDefault();
    let hardcodedPw = 'SlingAirAdmin';

    if (passwordInput === hardcodedPw) {
        history.push('/admin');
    } else {
        alert('Wrong password.');
    }
}

return (
    <Wrapper>
        <Heading>Log in</Heading>
        <Form autoComplete="off" onSubmit={handleLogin}>
            <div>
                <input
                type="password"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    </Wrapper>
);
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h2`
    margin: 30px 0 30px 0;
    font-size: 40px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    font-size: 20px;
    margin-top: 20px;
    padding: 10px 20px;
    color: ${themeVars.orange};
    background-color: ${themeVars.alabamaCrimson};
    border: none;
    border-radius: 5px;

    &:hover {
        color: ${themeVars.alabamaCrimson};
        background-color: ${themeVars.orange};
        border: 1px solid ${themeVars.alabamaCrimson};
        cursor: pointer;
    }
`;

export default AdminLogin;

