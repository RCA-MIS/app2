"use client"
import FileDropZone from '@/components/dropzone/FileDrop'
import React from 'react'

const ProfileInput = () => {
        const handleFilesSelected = (filetype: string, files: File[]) => {
                console.log(filetype + ':' + files);
        };
        return (
                <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected} title='Main Landing Page Barner Image' />
        )
}

export default ProfileInput