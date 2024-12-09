// src/styles/SharedLayoutStyles.ts
import styled from 'styled-components';
import { Spin } from 'antd';

// Stylizowany główny kontener dla zawartości stron
export const MainWrapper = styled.div`
  padding-top: ${({ theme }) => theme.headerHeight}; /* Rezerwacja miejsca na header */
  min-height: 100vh; /* Zapewnia wypełnienie całej wysokości okna */
  display: flex;
  flex-direction: column; /* Ułożenie w kolumny (header -> main -> footer) */
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Spinner = styled(Spin)`
  position: absolute;
  color: ${({ theme }) => theme.colors.bgWhite};
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
