import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { themeVars } from "../GlobalStyles";

const Query = ({
    disabled,
    formData,
    handleChange,
    handleSubmit,
    subStatus,
}) => (
    <Wrapper>
        <UserForm>
            <Input
                name="id"
                placeholder="Reservation ID"
                type="text"
                handleChange={handleChange}
                value={formData.id}
            />
            <Button
                disabled={disabled}
                handleClick={handleSubmit}
                subStatus={subStatus}
            />
        </UserForm>
    </Wrapper>
);

const Wrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 700px;
`;
const UserForm = styled.div`
    border: 3px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: 20px auto;
    padding: 30px;
    width: 400px;
`;

export default Query;
