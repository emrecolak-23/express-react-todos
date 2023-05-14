import { FileUploadLabel, FileUploadInput, FileUploadText, FileUploadIcon } from "./upload-input.component"
import { FC, ChangeEvent, useState } from "react"

type UploadInput = {
    type: string,
    text: string,
    onFileChange: Function,
    fileAccept: string
}


const UploadInput:FC<UploadInput> = ({type, text, onFileChange, fileAccept}) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleUploadInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0])
            onFileChange(event.target.files[0])
        }
    }


    return <FileUploadLabel htmlFor="file-upload">
     <FileUploadInput type="file" id="file-upload" accept={fileAccept} onChange={handleUploadInputChange} />
    <FileUploadIcon>
      {selectedFile ? `Selected ${type}` : text}
    </FileUploadIcon>
    <FileUploadText> {selectedFile ? selectedFile.name : `Choose a ${type}`}    </FileUploadText>
  </FileUploadLabel>
}

export default UploadInput