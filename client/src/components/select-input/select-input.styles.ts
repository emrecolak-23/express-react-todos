import styled from "styled-components";


export const SelectContainer = styled.div`
  margin: 25px 0;

`
export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  color: #333;
  font-size: 1rem;
  appearance: none;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    background-color: transparent;
  }

`
export const SelectLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-family: 'Roboto', sans - serif;
  font-size: 14px;
`




