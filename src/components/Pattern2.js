import React from "react";
import styled from "styled-components";

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  .container {
    width: 100%;
    height: 100%;
    /* Add your background pattern here */
    background: conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0),
      conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) 60px 60px,
      conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(2 * 60px)
        calc(2 * 60px),
      conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(3 * 60px)
        calc(3 * 60px),
      repeating-linear-gradient(135deg, #adafff 0 12.5%, #474bff 0 25%);
    background-size: calc(4 * 60px) calc(4 * 60px);
  }
`;

export default Pattern;
