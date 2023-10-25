import PdfRendered from "./components/PdfRendered"
const App = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-[70%]">
        <PdfRendered />
      </div>
      <div className="w-[30%] bg-green-200"> 

      </div>
    </div >
  )
}

export default App