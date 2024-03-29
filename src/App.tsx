import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <Title>Learn to code by watching others</Title>
        <Paragraph>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Paragraph>
        <PriceCard>
          <PriceText>
            <PriceSpan>Try it free 7 days</PriceSpan> then $20/mo. thereafter
          </PriceText>
        </PriceCard>
        <FormCard>
          <NameInput placeholder="First Name"></NameInput>
          <NameInput placeholder="Last Name"></NameInput>
          <NameInput placeholder="Email Address"></NameInput>
          <NameInput placeholder="Password"></NameInput>
          <Button>CLAIM YOUR FREE TRIAL</Button>
          <AboutText>
            By clicking the button, you are agreeing to our{" "}
            <AboutSpan>Terms and Services</AboutSpan>
          </AboutText>
        </FormCard>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  background-image: url(/images/background.png);
  width: 375px;
  min-height: 100vh;
  padding: 50px 24px 68px;
  background-position: center;
  background-size: cover;
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
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  color: white;
  text-align: center;
  margin-bottom: 64px;
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
  width: 100%;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-top: 24px;
`;
const NameInput = styled.input`
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
  margin-bottom: 16px;
  border: 1px solid grey;
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
  letter-spacing: 1px;
  background-color: #38cc8b;
  cursor: pointer;
  &&:hover {
    background-color: #94dfb9;
    color: #01000045;
  }
`;
const AboutText = styled.p`
  width: 249px;
  height: 42px;
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
