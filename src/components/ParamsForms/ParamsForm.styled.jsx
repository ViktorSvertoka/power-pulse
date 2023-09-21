import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid rgba(73, 20, 221, 0.3);
`;

export const SectionTitle = styled.p`
  color: var(--normal-color);
  margin-bottom: 4px;
  font-size: 12px;
`;

export const Input = styled.input`
  border: 1px solid rgba(73, 20, 221, 0.3);
  max-width: 155px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14;
`;

export const WrapperInputField = styled.div`
 width: 100%;
  /* display: flex; */
  /* display: inline-flex; */
  /* align-items: flex-end; */
  margin-top: 20px;
  gap: 14px;
  border: 1px solid rgba(73, 20, 221, 0.3);
`;

export const InputField = styled.input`
  max-width: 135px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
`;

export const Radio = styled.input`
  /*  */
`;

export const Label = styled.label`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Button = styled.button`
  margin: 40px 0px 80px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  background: var(--orange-color);
  color: rgba(239, 237, 232, 0.6);
`;
