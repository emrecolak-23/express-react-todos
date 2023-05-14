import styled from "styled-components";

export const DownloadFileContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`


export const AttachmentButton = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #2196f3; /* Adjust the color as needed */
  color: #ffffff; /* Adjust the text color as needed */
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2; /* Adjust the hover color as needed */
  }
`