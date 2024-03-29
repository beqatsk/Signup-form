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
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  background-image: url(/images/background.png);
  width: 375px;
  min-height: 100vh;
  padding: 88px 24px 68px;
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
