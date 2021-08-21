import { useEffect, useState } from "react"
import {
  makeStyles,
  Box,
  Typography,
  Select,
  MenuItem,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core"
import { StructuredValue } from "../../proto/tensorflow/core/protobuf/struct_pb"
import { DataType } from "../../proto/tensorflow/core/framework/types_pb"

const useStyles = makeStyles({
  selectBox: {
    textAlign: "center",
    "& > *": {
      margin: 10,
    },
  },
  list: {
    "& > *": {
      padding: "5px 0",
    },
  },
})

export default function ModelGraphViewer({ objectGraphDefList, functionList, concreteFunctionsMap }) {
  const classes = useStyles()

  const [objectGraphDef, setObjectGraphDef] = useState("")
  const handleSetObjectGraphDef = (e) => {
    setObjectGraphDef(e.target.value)
    setFunctionDef("")
    setFunctionSignature()
  }
  const [functionDefName, setFunctionDef] = useState("")
  const handleSetFunctionDef = (e) => setFunctionDef(e.target.value)
  const [functionSignature, setFunctionSignature] = useState()

  useEffect(() => {
    if (functionDefName && functionList) {
      for (const function_ of functionList) {
        if (function_.signature.name === functionDefName) {
          setFunctionSignature({
            canonicalDef: concreteFunctionsMap.get(functionDefName),
            def: function_,
          })
        }
      }
    }
  }, [functionList, functionDefName, concreteFunctionsMap])

  return (
    <>
      <Paper>
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
          <Select
            labelId="functionIndexLabel"
            id="functionIndex"
            value={functionDefName}
            onChange={handleSetFunctionDef}
          >
            {objectGraphDef &&
              objectGraphDef.pbFunction.map((value, index) => (
                <MenuItem value={value} key={index}>
                  <code>{value}</code>
                </MenuItem>
              ))}
          </Select>
        </Box>

        {functionSignature && (
          <Box m={2}>
            <ul className={classes.list}>
              <li>
                <Typography>
                  Function Name: <code>{functionSignature.def.signature.name}</code>
                </Typography>
              </li>
              <li>
                <Typography>Inputs</Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Data Type</TableCell>
                      <TableCell>Shape</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {functionSignature.canonicalDef &&
                      flattenSignature(functionSignature.canonicalDef.getCanonicalizedInputSignature()).map(
                        (val, index) => (
                          <TableRow key={`signature-${index}`}>
                            <TableCell component="th" scope="row">
                              <code>{val.getName()}</code>
                            </TableCell>
                            <TableCell>
                              <code>{Object.keys(DataType).find((key) => DataType[key] === val.getDtype())}</code>
                            </TableCell>
                            <TableCell>
                              <code>
                                [
                                {val
                                  .getShape()
                                  .toObject()
                                  .dimList.map((v) => v.size)
                                  .join(", ")}
                                ]
                              </code>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                  </TableBody>
                </Table>
              </li>
              <li>
                <Typography>Outputs</Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Data Type</TableCell>
                      <TableCell>Shape</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {functionSignature.canonicalDef &&
                      flattenSignature(functionSignature.canonicalDef.getOutputSignature()).map((val, index) => (
                        <TableRow key={`signature-${index}`}>
                          <TableCell component="th" scope="row">
                            <code>{val.getName()}</code>
                          </TableCell>
                          <TableCell>
                            <code>{Object.keys(DataType).find((key) => DataType[key] === val.getDtype())}</code>
                          </TableCell>
                          <TableCell>
                            <code>
                              [
                              {val
                                .getShape()
                                .toObject()
                                .dimList.map((v) => v.size)
                                .join(", ")}
                              ]
                            </code>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </li>
              <li>
                <Typography>Graph Def</Typography>
                <pre>
                  <code>{JSON.stringify(functionSignature.def, null, 4)}</code>
                </pre>
              </li>
            </ul>
          </Box>
        )}
      </Paper>
    </>
  )
}

// Reference
// https://github.com/tensorflow/tensorflow/blob/5dcfc51118817f27fad5246812d83e5dccdc5f72/tensorflow/c/experimental/saved_model/core/saved_model_utils.cc#L278
function flattenSignature(signature) {
  let flattenedSpecs = []

  switch (signature.getKindCase()) {
    case StructuredValue.KindCase.DICT_VALUE: {
      const dict = signature.getDictValue()

      const values = dict
        .getFieldsMap()
        .toArray()
        .sort((a, b) => a[0] < b[0])
        .map((a) => dict.getFieldsMap().get(a[0]))

      for (const value of values) {
        flattenedSpecs = flattenedSpecs.concat(flattenSignature(value))
      }
      return flattenedSpecs
    }
    case StructuredValue.KindCase.TUPLE_VALUE: {
      const tuple = signature.getTupleValue()
      for (const value of tuple.getValuesList()) {
        flattenedSpecs = flattenedSpecs.concat(flattenSignature(value))
      }
      return flattenedSpecs
    }
    case StructuredValue.KindCase.LIST_VALUE: {
      const list = signature.getListValue()
      for (const value of list.getValuesList()) {
        flattenedSpecs = flattenedSpecs.concat(flattenSignature(value))
      }
      return flattenedSpecs
    }
    case StructuredValue.KindCase.TENSOR_SPEC_VALUE: {
      return [signature.getTensorSpecValue()]
    }
    case StructuredValue.KindCase.NONE_VALUE: {
      return []
    }
    default: {
      console.log("Cannot flatten signature, signature:", signature.toObject(), signature.getKindCase())
      return []
    }
  }
}
