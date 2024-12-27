// src/components/FooterStyles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-top: 3px solid ${({ theme }) => theme.colors.textOrange};
`;

export const LogoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 3rem;
  padding: 0.5rem;
  will-change: filter, transform;
  transition: filter 300ms, transform 300ms;

  &:hover {
    filter: drop-shadow(0 0 2rem ${({ theme }) => theme.colors.textBrightBrown});
    transform: scale(1.1);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2rem ${({ theme }) => theme.colors.textOrange});
    transform: scale(1.1);
  }
`;

export const FooterText = styled.p`
  margin: 1rem auto 0rem;
  font-size: 0.75rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};  
`;

export const FooterTitle = styled.h4`
  font-family: 'Oswald', sans-serif;
  margin: 0rem auto 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LogoKynological = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  margin: 0px auto;
  gap: 10px;  
`;

export const LogoAssociation = styled.div`
  width: 80px;
  padding: 10px;
`;