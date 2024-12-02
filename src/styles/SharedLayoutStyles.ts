// src/styles/SharedLayoutStyles.ts
import styled from 'styled-components';

// Stylizowany główny kontener dla zawartości stron
export const MainWrapper = styled.div`
  padding-top: ${({ theme }) => theme.headerHeight}; /* Rezerwacja miejsca na header */
  min-height: 100vh; /* Zapewnia wypełnienie całej wysokości okna */
  display: flex;
  flex-direction: column; /* Ułożenie w kolumny (header -> main -> footer) */
`;
