import React, { useState } from 'react';
import { Document, Page, Thumbnail, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import pdfFile from '../../assets/ui-color-palette.pdf';
import { useResizeDetector } from 'react-resize-detector';
import Loader from './../components/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfRendered = () => {
    const [numPages, setNumPages] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [renderedScale, setRenderedScale] = useState(null);
    const isLoading = renderedScale !== scale;

    const { width, ref } = useResizeDetector();

    return (
        <div className='flex-1 w-full  mx-auto h-screen '>

            <Document
                loading={
                    <div className='h-[5rem] w-full'>
                        <Loader />
                    </div>
                }
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                file={pdfFile}
                className='max-h-full w-full'
            >
                <div className='flex w-full h-full'>
                    <div className='w-[30%] h-full   max-h-screen overflow-scroll scrollbar-hide'>
                        {new Array(numPages).fill(0).map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrPage(index + 1)}
                                className={`w-[50%] bg-white p-1 relative my-4 min-h-[200px] mx-auto overflow-hidden rounded-md border-[3px]  cursor-pointer ${currPage === index + 1 ? 'border-blue-600' : ''
                                    }`}
                            >
                                <div className={`absolute z-[20] bg-blue-600 rounded-br-lg top-0 left-0 p-4 text-white font-bold ${currPage === index + 1 ? '' : 'hidden'}`}>{index + 1}</div>
                                <Thumbnail pageIndex={index} width={200} height={200} className={`h-[200px] w-[200px]`} />
                            </div>
                        ))}
                    </div>
                    <div className='w-[50%] max-h-screen overflow-scroll scrollbar-hide' ref={ref}>
                        {isLoading && renderedScale ? (
                            <Page
                                width={width ? width : 1}
                                pageNumber={currPage}
                                scale={scale}
                                rotate={rotation}
                                key={'@' + renderedScale}
                            />
                        ) : null}

                        {new Array(numPages).fill(0).map((_, index) => (
                            <Page
                                width={width ? width : 1}
                                pageNumber={index + 1}
                                scale={scale}
                                rotate={rotation}
                                loading={
                                    <div className='h-[5rem] w-full'>
                                        <Loader />
                                    </div>
                                }
                                onRenderSuccess={() => setRenderedScale(scale)}
                            />
                        ))}
                    </div>
                </div>
            </Document>

        </div>
    );
};

export default PdfRendered;
