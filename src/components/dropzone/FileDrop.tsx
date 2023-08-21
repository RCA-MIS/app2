"use client"
import { FC, ReactNode } from "react";
import { useDropzone } from "react-dropzone"

const FileDropZone: FC<{ fileType: string; onFilesSelected: (filetype: string, files: File[]) => void, title: string; }> = ({
        fileType,
        onFilesSelected,
        title
}) => {
        const onDrop = (acceptedFiles: File[]) => {
                onFilesSelected(fileType, acceptedFiles);
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
                        {isDragActive ? (
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drop the file here</p>
                                </div>
                        ) : (
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>{title}</p>
                                </div>
                        )}
                </div>
        );
};

export default FileDropZone