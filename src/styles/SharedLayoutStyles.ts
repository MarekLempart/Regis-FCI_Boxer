// src/styles/SharedLayoutStyles.ts // remove it
import styled from "styled-components";
import { Spin } from "antd";

// Stylizowany główny kontener dla zawartości stron
export const MainWrapper = styled.div`
  padding-top: ${({ theme }) =>
    theme.headerHeight};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Spiner = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
