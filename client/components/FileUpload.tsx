
interface FileUploadProps {
    file: any;
    setFile: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile }) => {
    return (
        <div>
            <input type="file" />
        </div>
    )
}

export default FileUpload;
