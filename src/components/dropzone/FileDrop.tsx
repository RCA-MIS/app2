"use client"
import { FC, ReactNode } from "react";
import { useDropzone } from "react-dropzone"

const FileDropZone: FC<{ fileType: string; onFilesSelected: (files: File[]) => void, children: ReactNode; }> = ({
        fileType,
        onFilesSelected,
        children
}) => {
        const onDrop = (acceptedFiles: File[]) => {
                onFilesSelected(acceptedFiles);
        };

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
                onDrop,
                accept: {
                        'image/png': ['.png'],
                }
        });

        return (
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active bg-[rgba(42,10,82,0.1)]' : ''}`}>
                        <input {...getInputProps()} />
                        {children}
                </div>
        );
};

export default FileDropZone