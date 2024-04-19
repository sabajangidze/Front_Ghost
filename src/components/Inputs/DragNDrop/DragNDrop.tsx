import React, { useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { RiDragDropLine } from "react-icons/ri";

interface DragNDropProps{
    uploadedFiles: File[];
    setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

function DragNDrop({uploadedFiles, setUploadedFiles} : DragNDropProps) {
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 10, // Maximum number of files
        maxSize: 25 * 1024 * 1024, // Maximum file size: 25 MB
        onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            if (fileRejections.length > 0) {
                const errors = fileRejections.map((rejectedFile) => {
                    const { errors } = rejectedFile;
                    return errors.map((error) => error.message).join(", ");
                });
                setErrorMessages(errors);
            } else {
                setErrorMessages([]);
            }

            const newFiles = acceptedFiles.slice(0, 10 - uploadedFiles.length); // Limit to 10 files
            setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
            // Call your backend API endpoint to upload files
        },
    });

    const removeFile = (fileName: string) => {
        const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
        setUploadedFiles(updatedFiles);
    };

    return (
        <div
            {...getRootProps()}
            className="group h-60 w-full p-2 my-2 rounded-lg border-2 border-main-purple border-solid text-center flex flex-col justify-center hover:cursor-pointer hover:bg-main-red transition-all ease-in duration-100"
        >
            <input {...getInputProps()} />
            <RiDragDropLine
                className="w-full h-32 text-main-purple transition-all duration-100 ease-in group-hover:text-white"
                size={"100%"}
            />
            <h3 className="text-sm text-main-purple transition-all duration-100 ease-in group-hover:text-white">
                ჩააგდეთ ნებისმიერი ფაილი(მაქს. 10 ფაილი, 25მბ)
            </h3>
            {errorMessages.length > 0 && (
                <div className="text-red-500">
                    {errorMessages.map((errorMessage, index) => (
                        <p key={index}>{errorMessage}</p>
                    ))}
                </div>
            )}
            <ul>
                {uploadedFiles.map((file: File) => (
                    <div className="badge border-main-purple p-4" key={file.name}>
                        {file.name}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default DragNDrop;
