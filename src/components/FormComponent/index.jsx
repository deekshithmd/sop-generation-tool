import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
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
  OptionContainer,
  Dropdown,
  InfoContainer,
  Span,
  HorizontalLine,
} from "../ComponentList";
import Warning from "../../assets/warning.png";
import Down from "../../assets/down.png";
import { validateEmail, checkFormData, sendEmail } from "../../helpers";
import { initialFormState, qualificationList,qualificationSet } from "../../config";

export const FormComponent = () => {
  const [showForm, setShowForm] = useState(true);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isFormSubmittedOnce, setIsFormSubmittedOnce] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [showDropdown, setShowDropdown] = useState(false);
  const formRef = useRef(null);
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => setShowDropdown(false));

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
        setFormData(initialFormState);
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
        {showForm ? (
          <>
            <Span padding="14px 25px">
              Fill this questionnaire for the student. After submitting, you
              will receive an email at the email address that you have provided
              with a Statement of Purpose customized for you. You can use and
              modify that as per your needs.
            </Span>
            <HorizontalLine />
            {isFormSubmittedOnce && !isFormCompleted && (
              <WarningContainer padding="0px 25px 14px">
                <img src={Warning} height="21px" width="20px" alt="warning" />
                <WarningText>Fill all compulsory fields</WarningText>
              </WarningContainer>
            )}
          </>
        ) : (
          <>
            <Span padding="14px 25px">
              Thanks for using our customized SOP Generator. You will receive a
              customized SOP on the email you provided in this form. Feel free
              to use and edit it as you see fit.
            </Span>
            <Span padding="14px 25px">Good luck with your application!</Span>
            <Span padding="14px 25px">
              <a href="/" onClick={() => setShowForm(true)}>
                Submit another response
              </a>
            </Span>
          </>
        )}
      </InfoContainer>
      {showForm && (
        <Form onSubmit={handleSubmit}>
          <InputContainer border={checkIsFieldValid("email") ? "red" : ""}>
            <Label>
              Email<Important>*</Important>
            </Label>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                value={formData["email"].value}
                placeholder="Your email address"
                width="300px"
                className="border"
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("email") ? "red" : "#dadce0"}
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
                value={formData["name"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("name") ? "red" : "#dadce0"}
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
                value={formData["age"].value}
                onChange={handleDataChange}
                borderBottom={
                  formData["age"].isFocussed && formData["age"].value === 0
                    ? "red"
                    : "#dadce0"
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
            <Dropdown onClick={() => setShowDropdown(!showDropdown)}>
              {formData?.qualification?.value
                ? qualificationSet[formData?.qualification?.value]
                : "Choose"}
                 <img src={Down} height="15px" width="15px" alt="warning" />
              {showDropdown && (
                <OptionContainer ref={dropdownRef}>
                  {qualificationList?.map((item) => {
                    return (
                      <Option
                        value={item.value}
                        key={item?.id}
                        onClick={() => {
                          setShowDropdown(!showDropdown);
                          setFormData((prev) => ({
                            ...prev,
                            qualification: {
                              value: item?.value,
                              isFocussed: true,
                            },
                          }));
                        }}
                      >
                        {item.name}
                      </Option>
                    );
                  })}
                </OptionContainer>
              )}
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
                value={formData["institute"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("institute") ? "red" : "#dadce0"
                }
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
                value={formData["field"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("field") ? "red" : "#dadce0"}
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
                value={formData["experience"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("experience") ? "red" : "#dadce0"
                }
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
                value={formData["institutecanada"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("institutecanada") ? "red" : "#dadce0"
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
                value={formData["programcanada"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("programcanada") ? "red" : "#dadce0"
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
                value={formData["countryorigin"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("countryorigin") ? "red" : "#dadce0"
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
                value={formData["goals"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("goals") ? "red" : "#dadce0"}
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
                value={formData["listening"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("listening") ? "red" : "#dadce0"
                }
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
                value={formData["reading"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("reading") ? "red" : "#dadce0"}
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
                value={formData["speaking"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("speaking") ? "red" : "#dadce0"}
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
                value={formData["writing"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("writing") ? "red" : "#dadce0"}
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
                value={formData["tutionfees"].value}
                onChange={handleDataChange}
                borderBottom={
                  checkIsFieldValid("tutionfees") ? "red" : "#dadce0"
                }
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
                value={formData["gicpay"].value}
                onChange={handleDataChange}
                borderBottom={checkIsFieldValid("gicpay") ? "red" : "#dadce0"}
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
              onClick={()=>setFormData(initialFormState)}
              background="transparent"
              color="#176ee8"
              hover="#cef0f5"
            >
              Clear
            </Button>
          </BottomRow>
        </Form>
      )}
    </Container>
  );
};
