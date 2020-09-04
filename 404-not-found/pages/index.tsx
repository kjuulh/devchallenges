import styled from 'styled-components';
import Head from 'next/head';
import Device from '../lib/sizes/device';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
`;

const Title = styled.h3`
  margin: 1.5rem 2.5rem;
`;

const Header = styled.div``;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  display: flex;
  flex-grow: 1;
  gap: 5rem;
  flex-flow: column;
  margin: 4rem auto 2rem;

  @media ${Device.tablet} {
    flex-flow: row;
    margin: 0 auto;
  }
`;

const HeroImage = styled.img`
  max-height: 500px;
  max-width: 100%;
`;

const CallToAction = styled.div`
  max-width: 600px;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;

  font-weight: bold;
  margin: 0;

  @media ${Device.tablet} {
    font-size: 5rem;
  }
`;

const HeroText = styled.h2`
  font-size: 1.6rem;
  font-weight: lighter;
  max-width: 350px;
  margin: 0 0 5px;
`;

const HeroButton = styled.a`
  border: none;
  outline: none;
  background: #111;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
  letter-spacing: 0.1rem;
  flex-grow: 0;
  align-self: flex-start;
  text-decoration: none;
  transition: background 200ms ease;

  :hover {
    background: #333;
  }

  :active {
    background: #222;
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

export default function Home() {
  return (
    <html>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <style jsx global>
        {`
          *,
          button {
            font-family: 'Inconsolata', monospace;
          }
        `}
      </style>
      <body>
        <Layout>
          <Header>
            <Title>404 Not Found</Title>
          </Header>
          <Hero>
            <HeroImage src='/images/Scarecrow.png'></HeroImage>
            <CallToAction>
              <HeroTitle>I have bad news for you</HeroTitle>
              <HeroText>
                The page you are looking for might be removed or temporarily
                unavailable
              </HeroText>
              <HeroButton href='/'>Back to homepage</HeroButton>
            </CallToAction>
          </Hero>
          <Footer>kjuulh @ DevChallenges.io</Footer>
        </Layout>
      </body>
    </html>
  );
}
