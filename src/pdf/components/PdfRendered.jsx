import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import pdfFile from '../../assets/ui-color-palette.pdf'
import { useResizeDetector } from 'react-resize-detector'
import Loader from './../components/Loader'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const PdfRendered = () => {

    const [numPages, setNumPages] = useState(0)
    const [currPage, setCurrPage] = useState(1)
    const [scale, setScale] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [renderedScale, setRenderedScale] = useState(null)
    const isLoading = renderedScale !== scale

    const { width, ref } = useResizeDetector()

    return (
        <div className='flex h-screen'>
            <div className='w-[30%] h-full bg-yellow-200  overflow-scroll scrollbar-hide'>

            </div>
            <div className='w-[70%] flex-1 h-full mx-auto  overflow-scroll scrollbar-hide'>
                <div ref={ref} className='w-full mx-auto '>
                    <Document
                        loading={
                            <div className='h-[5rem] w-full'>
                                <Loader />
                            </div>
                        }
                        // onLoadError={() => {
                        //   alert('Error While Loading the PDF')
                        // }}
                        onLoadSuccess={({ numPages }) =>
                            setNumPages(numPages)
                        }
                        file={pdfFile}
                        className='max-h-full w-full'
                    >
                        {isLoading && renderedScale ? (
                            <Page
                                width={width ? width : 1}
                                pageNumber={currPage}
                                scale={scale}
                                rotate={rotation}
                                key={'@' + renderedScale}
                            />
                        ) : null}

                        {
                            new Array(numPages).fill(0).map((_, index) => (
                                <Page
                                    width={width ? width : 1}
                                    pageNumber={index + 1}
                                    scale={scale}
                                    rotate={rotation}
                                    // key={'@' + scale}
                                    loading={
                                        <div className='h-[5rem] w-full'>
                                            <Loader />
                                        </div>
                                    }
                                    onRenderSuccess={() =>
                                        setRenderedScale(scale)
                                    }
                                />
                            ))
                        }

                    </Document>
                </div>
            </div>
        </div>
    )
}

export default PdfRendered