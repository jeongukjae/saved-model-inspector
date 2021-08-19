import Header from "./Header"
import FileUploader from "./FileUploader"
import Visualizer from "./Visualizer"
import { useState } from "react"

export default function App() {
  const [savedModelPb, setSavedModelPb] = useState()

  return (
    <div>
      <Header />
      <FileUploader onRead={setSavedModelPb} />
      <Visualizer savedModelPb={savedModelPb} />
    </div>
  )
}
