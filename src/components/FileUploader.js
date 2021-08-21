import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { useState } from "react"
import { SavedModel } from "../proto/tensorflow/core/protobuf/saved_model_pb"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "30px 0px",
  },
}))

export default function FileUploader({ onRead, handleReadingState }) {
  const classes = useStyles()
  const [fileReader] = useState(new FileReader())

  const handleFileChosen = (file) => {
    if (handleReadingState) handleReadingState(true)

    fileReader.addEventListener("load", (event) => {
      const savedModelPb = SavedModel.deserializeBinary(event.target.result)

      console.log("saved model pb:")
      console.log(savedModelPb)

      if (handleReadingState) handleReadingState(false)
      if (onRead) onRead(savedModelPb)
    })
    fileReader.readAsArrayBuffer(file)
  }

  return (
    <Box className={classes.root}>
      <Button variant="contained" component="label" color="secondary">
        Inspect saved_model.pb
        <input type="file" hidden={true} onChange={(e) => handleFileChosen(e.target.files[0])} accept=".pb" />
      </Button>
    </Box>
  )
}
