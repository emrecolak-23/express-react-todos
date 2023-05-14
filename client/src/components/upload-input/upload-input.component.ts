import styled from "styled-components";


export const FileUploadLabel = styled.label`
  display: inline-block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  &:active,
  &:hover {
    background-color: #bdbdbd;
  }

`

export const FileUploadInput = styled.input`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
cursor: pointer;
`

export const FileUploadText = styled.span`
 display: inline - block;
 vertical-align: middle;
`

export const FileUploadIcon = styled.span`
  display: inline - block;
  vertical-align: middle;
  margin-right: 8px;
`



