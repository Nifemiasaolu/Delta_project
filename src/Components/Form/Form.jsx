import { useState } from "react";
import { Container } from "../../GlobalStyles";
import validateForm from "../Footer/validateForm";

import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./FormStyle";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const resultError = validateForm({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Application was submitted");
  }

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name",
      onChange: (e) => setName(e.target.value),
      value: name,
      type: "text",
    },
    {
      label: "Email",
      onChange: (e) => setEmail(e.target.value),
      value: email,
      type: "email",
    },
    {
      label: "Password",
      onChange: (e) => setPassword(e.target.value),
      value: password,
      type: "password",
    },
    {
      label: "Confirm Password",
      onChange: (e) => setConfirmPass(e.target.value),
      value: confirmPass,
      type: "password",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign up</FormTitle>

            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    value={el.value}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">Signup</FormButton>
            </FormWrapper>

            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}{" "}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
}

export default Form;
// /\\\\\
