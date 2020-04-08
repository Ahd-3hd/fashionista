import styled from "styled-components";
const colors = {
  pink: "#D35C5E",
  blue: "#BBDFDB",
  black: "#353535",
};
const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 3rem auto;
  padding: 1rem;
`;

const TextInput = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1rem 0;
`;

const FileField = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1rem 0;
`;
const SubmitButton = styled.button`
  margin: 1rem 0;
  padding: 0.7rem 1rem;
  background: ${colors.pink};
  font-weight: bold;
  color: #fff;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export { ProductForm, TextInput, SubmitButton, FileField };
