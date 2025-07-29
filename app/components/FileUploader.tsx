import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;

      onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
      onDrop,
      multiple: false,
      accept: { 'application/pdf': ['.pdf']},
      maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;


  return (
       <div className="w-full gradient-border">
         <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="space-y-4 cursor-pointer">
             <div className="mx-auto w-16 h-16 flex items-center justify-between">
                <img src="/icons/info.svg" alt="upload" className="size-10" />
             </div>

               {file ? (
                   <div>

                   </div>
               ) : (
                   <div>
                      <p className="text-lg text-gray-500">
                        <span className="font-semibold">
                     Click to Upload
                        </span>
                      </p>
                   </div>
               )}

          </div>

         </div>
       </div>

      )
}
export default FileUploader
