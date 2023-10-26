import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useResizeDetector } from 'react-resize-detector';
import Loader from './Loader';

const PdfFullScreen = ({ PDFurl }) => {

    const [numPages, setNumPages] = useState();
    const { width, ref } = useResizeDetector();
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 z-[30] overflow-scroll scrollbar-hide bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 p-2'>
            <div>
                <div ref={ref}>
                    <Document
                        loading={
                            <div className='h-screen w-screen flex items-center justify-center'>
                                <Loader />
                            </div>
                        }
                        onLoadError={() => {
                            toast({
                                title: 'Error loading PDF',
                                description: 'Please try again later',
                                variant: 'destructive',
                            })
                        }}
                        onLoadSuccess={({ numPages }) =>
                            setNumPages(numPages)
                        }
                        file={PDFurl}
                        className='max-h-full'>
                        {new Array(numPages).fill(0).map((_, i) => (
                            <Page
                                key={i}
                                width={width ? width : 1}
                                pageNumber={i + 1}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default PdfFullScreen;
