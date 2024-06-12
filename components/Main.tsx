import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components for container and SVG
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  position: relative;
  background: radial-gradient(circle at left center, rgba(0,255,153,0.15), transparent 50%) 0 50%,
              radial-gradient(circle at right center, rgba(0,255,153,0.15), transparent 50%) 100% 50%;
  background-size: 200px 100%;
  background-repeat: no-repeat;
`;

const SVGContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SVGImage = styled.img`
  position: absolute;
  /* Add common styles for SVG images here if needed */
`;

// Main component
const Main = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Ensure the code runs only on the client side to avoid hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle "Join Waitlist" button click
  const handleJoinWaitlist = () => {
    router.push('/waitlist');
  };

  return (
    <Container>
      <SVGContainer>
        {isClient && (
          <>
            <SVGImage
              src="/cage.svg"
              alt="Background"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
            <SVGImage
              src="/subtitle.svg"
              alt="Subtitle"
              style={{ top: '30%', left: '15%', transform: 'translateX(-50%)' }}
            />
            <SVGImage
              src="/title.svg"
              alt="Title"
              style={{ top: '40%', left: '24%', transform: 'translateX(-50%)' }}
            />
            <SVGImage
              src="/startbuild.svg"
              alt="Start Building"
              style={{ top: '65%', left: '8%', cursor: 'pointer' }}
              onClick={() => alert('Start Building clicked')}
            />
            <SVGImage
              src="/waitlist.svg"
              alt="Join Waitlist"
              style={{ top: '65%', left: '22%', cursor: 'pointer' }}
              onClick={handleJoinWaitlist}
            />
            <SVGImage
              src="/circle.svg"
              alt="Background"
              style={{ top: '50%', left: '80%', transform: 'translate(-50%, -50%)' }}
            />
          </>
        )}
      </SVGContainer>
    </Container>
  );
};

export default Main;
