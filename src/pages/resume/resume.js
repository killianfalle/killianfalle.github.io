import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import DownloadIcon from "../../assets/svgs/download-icon";
import "pdfjs-dist/legacy/build/pdf.worker.min.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function Resume() {
    const pdfUrl = "/pdfs/resume.pdf";
    const [pdfSize, setPdfSize] = useState({ width: 0, height: 0 });
    
    const downloadPdf = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf"; // Set the downloaded filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const fetchPdfSize = async () => {
            try {
                const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
                const page = await pdf.getPage(1); // Get first page

                const viewport = page.getViewport({ scale: 1 }); // Default scale
                setPdfSize({
                    width: viewport.width,
                    height: viewport.height
                });
            } catch (error) {
                console.error("Error loading PDF:", error);
            }
        };

        fetchPdfSize();
    }, [pdfUrl]);

    return (
        <div className="p-12 justify-items-center overflow-auto" style={{ width: "100vw", height: "100vh"}}>
            <div className="flex flex-col">
                <button 
                    className="bg-primary cursor-pointer px-4 py-3 w-auto rounded-md mb-2 self-end flex items-center gap-1" 
                    onClick={downloadPdf}>
                    <p className="font-bold">Download </p>
                    <DownloadIcon/>
                </button>
                
                <iframe 
                    title="Resume PDF"
                    src={`${pdfUrl}#toolbar=0`}
                    style={{ 
                        width: pdfSize.width ? `${pdfSize.width}px` : "50%", 
                        height: pdfSize.height ? `${pdfSize.height}px` : "auto", 
                        border: "none" 
                    }} 
                />
            </div>
        </div>
    );
}

export default Resume;
