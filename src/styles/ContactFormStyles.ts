// src/styles/ContactFormStyles.ts

import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textDarkBlue};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textDarkNavy};
`;

export const TextArea = styled.textarea`
  padding: 10px;
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border: 1px solid ${({ theme }) => theme.colors.textDarkBlue};
  border-radius: 5px;
  resize: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.bgOrange};
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.bgDarkGray};
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;
