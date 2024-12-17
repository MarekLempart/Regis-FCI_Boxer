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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  gap: 10px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex-direction: row;
  }
  `;

export const InputTitle = styled.div`
  width: 160px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textWhite};
  `;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textDarkBlue};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textDarkNavy};
`;

export const TextArea = styled.textarea`
  width: 400px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border: 1px solid ${({ theme }) => theme.colors.textDarkBlue};
  border-radius: 5px;
  resize: none;
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;  
  color: red;
  font-size: 12px;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    justify-content: start;
  }
`;
