// src/styles/ContactDetailsStyles.ts

import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textOrange};
  margin-bottom: 15px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DetailIcon = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textOrange};
`;

export const DetailText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textWhite};

  a {
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.textOrange};
    }
  }
`;
