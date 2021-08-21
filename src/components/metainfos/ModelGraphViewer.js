import { useState } from "react"
import { makeStyles, Box, Typography, Select, MenuItem } from "@material-ui/core"

const useStyles = makeStyles({
  selectBox: {
    textAlign: "center",
    "& > *": {
      margin: 10,
    },
  },
})

export default function ModelGraphViewer({ objectGraphDefList }) {
  const classes = useStyles()

  const [objectGraphDef, setObjectGraphDef] = useState(undefined)
  const handleSetObjectGraphDef = (e) => setObjectGraphDef(e.target.value)
  const [functionDef, setFunctionDef] = useState(undefined)
  const handleSetFunctionDef = (e) => setFunctionDef(e.target.value)

  return (
    <>
      <Box className={classes.selectBox}>
        <Typography component="span">Object Graph Node</Typography>
        <Select
          labelId="objectGraphIndexLabel"
          id="objectGraphIndex"
          value={objectGraphDef}
          onChange={handleSetObjectGraphDef}
        >
          {objectGraphDefList
            .filter((node) => node.pbFunction.length > 0)
            .map((value, index) => (
              <MenuItem value={value} key={index}>
                <code>{value.name}</code>
              </MenuItem>
            ))}
        </Select>
      </Box>
      <Box className={classes.selectBox}>
        <Typography component="span">Function</Typography>
        <Select labelId="functionIndexLabel" id="functionIndex" value={functionDef} onChange={handleSetFunctionDef}>
          {objectGraphDef &&
            objectGraphDef.pbFunction.map((value, index) => (
              <MenuItem value={value} key={index}>
                <code>{value}</code>
              </MenuItem>
            ))}
        </Select>
      </Box>
    </>
  )
}
