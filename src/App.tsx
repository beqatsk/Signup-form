import styled from "styled-components";
import { FormEvent, useState, ChangeEvent } from "react";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
function App() {
  const [inputValues, setInputValues] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let globalError = false;

    if (!inputValues.firstName) {
      setFirstNameError(true);
      globalError = true;
    }

    if (!inputValues.lastName) {
      setLastNameError(true);
      globalError = true;
    }

    if (!regex.test(inputValues.email)) {
      setEmailError(true);
      globalError = true;
    }

    if (!inputValues.password) {
      setPasswordError(true);
      globalError = true;
    }

    if (!globalError) {
      setInputValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name == "firstName" && setFirstNameError(false);
    name == "lastName" && setLastNameError(false);
    name == "email" && setEmailError(false);
    name == "password" && setPasswordError(false);

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Part>
          <Title>Learn to code by watching others</Title>
          <Paragraph>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Paragraph>
        </Part>
        <Part>
          <PriceCard>
            <PriceText>
              <PriceSpan>Try it free 7 days</PriceSpan> then $20/mo. thereafter
            </PriceText>
          </PriceCard>
          <FormCard>
            <form onSubmit={handleSubmit}>
              <NameInput
                placeholder="First Name"
                name="firstName"
                value={inputValues.firstName}
                onChange={handleChange}
                error={firstNameError}
              />
              <Error error={firstNameError}>First Name cannot be empty</Error>
              <NameInput
                placeholder="Last Name"
                name="lastName"
                value={inputValues.lastName}
                onChange={handleChange}
                error={lastNameError}
              />
              <Error error={lastNameError}>Last Name cannot be empty</Error>
              <NameInput
                placeholder="beqa.tskhve@gmail.com"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                error={emailError}
              />

              <Error error={emailError}>Looks like this is not an email</Error>
              <NameInput
                placeholder="Password"
                name="password"
                type="password"
                value={inputValues.password}
                onChange={handleChange}
                error={passwordError}
              />
              <Error error={passwordError}>Password cannot be empty</Error>
              <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
            </form>
            <AboutText>
              By clicking the button, you are agreeing to our{" "}
              <AboutSpan>Terms and Services</AboutSpan>
            </AboutText>
          </FormCard>
        </Part>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background-image: url(/images/background.png);
  width: 100%;
  min-height: 100vh;
  padding: 50px 24px 68px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;
const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.29px;
  color: white;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.1;
    letter-spacing: -0.52px;
    max-width: 525px;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;
const PriceCard = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 18px 66px 18px 67px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #5e54a4;
`;
const PriceText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.73;
  letter-spacing: 0.27px;
  color: white;
  text-align: center;
`;
const PriceSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
const FormCard = styled.div`
  max-width: 768px;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-top: 24px;
`;
const NameInput = styled.input<{ error?: boolean }>`
  background-image: url(/images/errorImage.png);
  background-image: ${(props) =>
    props.error ? "url(/images/errorImage.png)" : "none"};
  background-position: right;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  width: 100%;
  height: 56px;
  padding-left: 19.4px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.86;
  letter-spacing: 0.25px;
  text-align: left;
  color: #3d3b48;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
  &::placeholder {
    font-size: 20px;
    opacity: 0.75;
    color: #3d3b48;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  letter-spacing: 1px;
  background-color: #38cc8b;
  cursor: pointer;
  &&:hover {
    background-color: #94dfb9;
    color: #01000045;
  }
`;
const AboutText = styled.p`
  margin: 8px 15px 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: #bab7d4;
`;
const AboutSpan = styled.span`
  color: red;
  cursor: pointer;
`;
const Error = styled.span<{ error: boolean }>`
  color: red;
  font-size: 12px;
  display: ${(props) => (props.error ? "block" : "none")};
`;
