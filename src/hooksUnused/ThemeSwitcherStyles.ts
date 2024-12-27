// src/styles/ThemeSwitcherStyles.ts

import styled from 'styled-components';

export const SwitcherButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
