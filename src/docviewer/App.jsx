import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useEffect } from "react";

function App() {
  const docs = [
    {
      uri: 'https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls',
      fileType: 'xls',
    },
    {
      uri: 'https://clibre-ebook.com/downloads/demos/demo.docx',
      fileType: 'docx'
    },
  ];
  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
  
  style = {{height: 1000}}/>
}

export default App;

