import { FiPaperclip } from "react-icons/fi"
import { DownloadFileContainer, AttachmentButton } from "./download-file.styles"
import {FC} from 'react'
import { useDispatch } from "react-redux"
import { downloadFile } from "../../store/thunks/todos/download"
type DownloadFileProps = {
    id: string
    file: string
}

const DownloadFile:FC<DownloadFileProps> = ({file, id}) => {

    const dispatch = useDispatch()

    const handleDownloadFile =  () => {


        dispatch<any>(downloadFile({id, file}))
    }

    return <DownloadFileContainer>
        <AttachmentButton onClick={handleDownloadFile}>
            <FiPaperclip size={20} />
            {file}
    </AttachmentButton>
  </DownloadFileContainer>
}

export default DownloadFile