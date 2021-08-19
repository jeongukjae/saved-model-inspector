import Header from "./Header"
import FileUploader from "./FileUploader"
import Visualizer from "./Visualizer"
import { useState } from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  progressRoot: {
    textAlign: "center",
  },
}))

export default function App() {
  const classes = useStyles()
  const [savedModelPb, setSavedModelPb] = useState()
  const [isReading, setIsReading] = useState(false)

  return (
    <div>
      <Header />
      <FileUploader
        onRead={setSavedModelPb}
        handleReadingState={setIsReading}
      />
      {isReading ? (
        <Box margin={1} className={classes.progressRoot}>
          {" "}
          Loading...{" "}
        </Box>
      ) : (
        <></>
      )}
      <Visualizer savedModelPb={savedModelPb} />
    </div>
  )
}
