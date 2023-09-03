import React, { useState, useRef } from "react";
import {
    Container,
    HeaderContainer,
    Header,
    InputContainer,
    Input,
    Form,
    B,
    BottomRow,
    RadioButtonContainer,
    Button,
    Label,
    InputWrapper,
    Important,
    WarningContainer,
    WarningText,
    Option,
    Dropdown,
    InfoContainer,
    Span,
    HorizontalLine,
} from "../ComponentList";
import Warning from "../../assets/warning.png";
import { validateEmail, checkFormData, sendEmail } from "../../helpers";

export const FormComponent = () => {
    const [showForm, setShowForm] = useState(true);
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [isFormSubmittedOnce, setIsFormSubmittedOnce] = useState(false);
    const [formData, setFormData] = useState({
        email: { value: "", isFocussed: false },
        name: { value: "", isFocussed: false },
        age: { value: 0, isFocussed: false },
        qualification: { value: "", isFocussed: false },
        institute: { value: "", isFocussed: false },
        field: { value: "", isFocussed: false },
        experience: { value: "", isFocussed: false },
        institutecanada: { value: "", isFocussed: false },
        programcanada: { value: "", isFocussed: false },
        countryorigin: { value: "", isFocussed: false },
        goals: { value: "", isFocussed: false },
        listening: { value: "", isFocussed: false },
        reading: { value: "", isFocussed: false },
        speaking: { value: "", isFocussed: false },
        writing: { value: "", isFocussed: false },
        firsttution: { value: "no", isFocussed: false },
        tutionfees: { value: "", isFocussed: false },
        gic: { value: "no", isFocussed: false },
        gicpay: { value: "", isFocussed: false },
    });
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (checkFormData(formData)) {
            const result = await sendEmail(formData);
            if (result) {
                setIsFormCompleted(true);
                setShowForm(false);
                window.scrollTo({
                    top: formRef,
                    left: 0,
                    behavior: "smooth",
                });
                formRef?.current?.reset();
            }
        } else {
            setIsFormSubmittedOnce(true);
            setIsFormCompleted(false);
            window.scrollTo({
                top: formRef,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    const handleDataChange = (event) => {
        event.preventDefault();

        if (event.target.name === "email") {
            if (validateEmail(event.target.value)) {
                setFormData({
                    ...formData,
                    [event.target.name]: { value: event.target.value, isFocussed: true },
                });
            }
        }

        if (event.target.name !== "email") {
            setFormData({
                ...formData,
                [event.target.name]: { value: event.target.value, isFocussed: true },
            });
        }
    };

    const checkIsFieldValid = (field) => {
        return formData[field].isFocussed && formData[field].value === "";
    };

    return (
        <Container>
            <HeaderContainer ref={formRef}>
                <Header>Effizient</Header>
            </HeaderContainer>
            <InfoContainer>
                <Span fontSize="32px" fontWeight="500">
                    Customized SOP Generator
                </Span>
                <Span padding="14px 25px">
                    Fill this questionnaire for the student. After submitting, you will
                    receive an email at the email address that you have provided with a
                    Statement of Purpose customized for you. You can use and modify that
                    as per your needs.
                </Span>
                <HorizontalLine />
                {isFormSubmittedOnce && !isFormCompleted && (
                    <WarningContainer padding="0px 25px 14px">
                        <img src={Warning} height="21px" width="20px" alt="warning" />
                        <WarningText>Fill all compulsory fields</WarningText>
                    </WarningContainer>
                )}
            </InfoContainer>
            {showForm ? (
                <Form onSubmit={handleSubmit}>
                    <InputContainer border={checkIsFieldValid("email") ? "red" : ""}>
                        <Label>
                            Email<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                width="300px"
                                className="border"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("email") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        email: { value: prev["email"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B background={checkIsFieldValid("email") ? "red" : "#227af5"} />
                            {checkIsFieldValid("email") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>Must be a valid email address</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("name") ? "red" : ""}>
                        <Label>
                            Full Name<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("name") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        name: { value: prev["name"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B background={checkIsFieldValid("name") ? "red" : "#227af5"} />
                            {checkIsFieldValid("name") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer
                        border={
                            formData["age"].isFocussed && formData["age"].value === 0
                                ? "red"
                                : ""
                        }
                    >
                        <Label>
                            Age<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="number"
                                name="age"
                                placeholder="Your age"
                                width="150px"
                                onChange={handleDataChange}
                                borderBottom={
                                    formData["age"].isFocussed && formData["age"].value === 0
                                        ? "red"
                                        : "black"
                                }
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        age: { value: prev["age"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B
                                background={
                                    formData["age"].isFocussed && formData["age"].value === 0
                                        ? "red"
                                        : "#227af5"
                                }
                            />
                            {checkIsFieldValid("age") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Highest Level of Education<Important>*</Important>
                        </Label>
                        <Dropdown name="qualification" onChange={handleDataChange}>
                            <Option value="grade12">Grade 12</Option>
                            <Option value="diploma">Diploma</Option>
                            <Option value="bachelor">Bachelor's Degree</Option>
                            <Option value="master">Master's Degree</Option>
                            <Option value="phd">PhD</Option>
                        </Dropdown>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("institute") ? "red" : ""}>
                        <Label>
                            Institute where you completed your highest level of education
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="institute"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("institute") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        institute: {
                                            value: prev["institute"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("institute") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("institute") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("field") ? "red" : ""}>
                        <Label>
                            What did you study?<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="field"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("field") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        field: { value: prev["field"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B background={checkIsFieldValid("field") ? "red" : "#227af5"} />
                            {checkIsFieldValid("field") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("experience") ? "red" : ""}>
                        <Label>
                            Do you have any relevant work experience?
                            <Important>*</Important>
                            <div>
                                Write None if no work experience. Provide the following details
                                if yes:
                                <ol>
                                    <li>Job Title </li>
                                    <li>Company Name </li>
                                    <li>Job duties </li>
                                </ol>
                                Sample Answer: I worked as a Sales Manager at Effizient
                                Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                                managed sales operations, reaching out to leads, lead the
                                outreach program, ensured meeting monthly targets.
                            </div>
                        </Label>
                        <InputWrapper width="100%">
                            <Input
                                type="text"
                                name="experience"
                                placeholder="Your answer"
                                width="100%"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("experience") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        experience: {
                                            value: prev["experience"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("experience") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("experience") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer
                        border={checkIsFieldValid("institutecanada") ? "red" : ""}
                    >
                        <Label>
                            What institute did you get admitted to in Canada?
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="institutecanada"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={
                                    checkIsFieldValid("institutecanada") ? "red" : "black"
                                }
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        institutecanada: {
                                            value: prev["institutecanada"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={
                                    checkIsFieldValid("institutecanada") ? "red" : "#227af5"
                                }
                            />
                            {checkIsFieldValid("institutecanada") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer
                        border={checkIsFieldValid("programcanada") ? "red" : ""}
                    >
                        <Label>
                            What is your program of study in Canada?
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="programcanada"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={
                                    checkIsFieldValid("programcanada") ? "red" : "black"
                                }
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        programcanada: {
                                            value: prev["programcanada"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={
                                    checkIsFieldValid("programcanada") ? "red" : "#227af5"
                                }
                            />
                            {checkIsFieldValid("programcanada") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer
                        border={checkIsFieldValid("countryorigin") ? "red" : ""}
                    >
                        <Label>
                            Which country are you applying from?
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="countryorigin"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={
                                    checkIsFieldValid("countryorigin") ? "red" : "black"
                                }
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        countryorigin: {
                                            value: prev["countryorigin"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={
                                    checkIsFieldValid("countryorigin") ? "red" : "#227af5"
                                }
                            />
                            {checkIsFieldValid("countryorigin") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("goals") ? "red" : ""}>
                        <Label>
                            What are your future goals?
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="goals"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("goals") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        goals: { value: prev["goals"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B background={checkIsFieldValid("goals") ? "red" : "#227af5"} />
                            {checkIsFieldValid("goals") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("listening") ? "red" : ""}>
                        <Label>
                            English Scores - Listening<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="listening"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("listening") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        listening: {
                                            value: prev["listening"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("listening") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("listening") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("reading") ? "red" : ""}>
                        <Label>
                            English Scores - Reading<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="reading"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("reading") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        reading: { value: prev["reading"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("reading") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("reading") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("speaking") ? "red" : ""}>
                        <Label>
                            English Scores - Speaking<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="speaking"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("speaking") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        speaking: {
                                            value: prev["speaking"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("speaking") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("speaking") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("writing") ? "red" : ""}>
                        <Label>
                            English Scores - Writing<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="writing"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("writing") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        writing: { value: prev["writing"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("writing") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("writing") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Did you pay your first year tuition?
                            <Important>*</Important>
                        </Label>
                        <RadioButtonContainer onChange={handleDataChange}>
                            <label htmlFor="firsttution">
                                <input
                                    type="radio"
                                    name="firsttution"
                                    width="10px"
                                    value="yes"
                                />{" "}
                                Yes
                            </label>
                            <label htmlFor="firsttution">
                                <input
                                    type="radio"
                                    name="firsttution"
                                    width="10px"
                                    value="no"
                                    defaultChecked
                                />{" "}
                                No
                            </label>
                        </RadioButtonContainer>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("tutionfees") ? "red" : ""}>
                        <Label>
                            How much tuition fee did you pay?<Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="tutionfees"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("tutionfees") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        tutionfees: {
                                            value: prev["tutionfees"].value,
                                            isFocussed: true,
                                        },
                                    }))
                                }
                            />
                            <B
                                background={checkIsFieldValid("tutionfees") ? "red" : "#227af5"}
                            />
                            {checkIsFieldValid("tutionfees") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Did you do a GIC?<Important>*</Important>
                        </Label>
                        <RadioButtonContainer onChange={handleDataChange}>
                            <label htmlFor="gic">
                                <input type="radio" name="gic" width="10px" value="yes" /> Yes
                            </label>
                            <label htmlFor="gic">
                                <input
                                    type="radio"
                                    name="gic"
                                    width="10px"
                                    value="no"
                                    defaultChecked
                                />{" "}
                                No
                            </label>
                        </RadioButtonContainer>
                    </InputContainer>
                    <InputContainer border={checkIsFieldValid("gicpay") ? "red" : ""}>
                        <Label>
                            How much did you pay towards GIC?
                            <Important>*</Important>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                name="gicpay"
                                placeholder="Your answer"
                                width="300px"
                                onChange={handleDataChange}
                                borderBottom={checkIsFieldValid("gicpay") ? "red" : "black"}
                                onFocus={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        gicpay: { value: prev["gicpay"].value, isFocussed: true },
                                    }))
                                }
                            />
                            <B background={checkIsFieldValid("gicpay") ? "red" : "#227af5"} />
                            {checkIsFieldValid("gicpay") && (
                                <WarningContainer>
                                    <img src={Warning} height="21px" width="20px" alt="warning" />
                                    <WarningText>This is a required question</WarningText>
                                </WarningContainer>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <BottomRow
                        background="transparent"
                        border="transparent"
                        padding="0px"
                    >
                        <Button type="submit">Submit</Button>
                        <Button
                            type="reset"
                            background="transparent"
                            color="#176ee8"
                            hover="#cef0f5"
                        >
                            Clear
                        </Button>
                    </BottomRow>
                </Form>
            ) : (
                <InputContainer>
                    Would you like to submit another response?{" "}
                    <button onClick={() => setShowForm(true)}>click here</button>
                </InputContainer>
            )}
        </Container>
    );
};
