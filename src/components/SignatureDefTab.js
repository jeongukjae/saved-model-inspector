import { useState } from "react"
import { makeStyles } from "@material-ui/core"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import {
  TableRow,
  TableCell,
  TableBody,
  Box,
  Collapse,
  Typography,
  Table,
  TableHead,
  IconButton,
  Paper,
  TableContainer,
} from "@material-ui/core"
import { DataType } from "../proto/tensorflow/core/framework/types_pb"

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
})

function Row({ signatureDef }) {
  const [open, setOpen] = useState(false)
  const classes = useRowStyles()

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <code>{signatureDef[0]}</code>
        </TableCell>
        <TableCell>
          <code>{signatureDef[1].methodName}</code>
        </TableCell>
        <TableCell align="right">{signatureDef[1].inputsMap.length}</TableCell>
        <TableCell align="right">{signatureDef[1].outputsMap.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="p" component="div">
                Inputs Map
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Data Type</TableCell>
                    <TableCell>Shape</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {signatureDef[1].inputsMap.map((inputRow, index) => (
                    <TableRow key={`${inputRow[0]}-${index}`}>
                      <TableCell component="th" scope="row">
                        <code>{inputRow[0]}</code>
                      </TableCell>
                      <TableCell>
                        <code>{Object.keys(DataType).find((key) => DataType[key] === inputRow[1].dtype)}</code>
                      </TableCell>
                      <TableCell>
                        <code>[{inputRow[1].tensorShape.dimList.map((v) => v.size.toString()).join(", ")}]</code>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box margin={2}>
              <Typography variant="p" gutterBottom component="div">
                Outputs Map
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Data Type</TableCell>
                    <TableCell>Shape</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {signatureDef[1].outputsMap.map((outputRow, index) => (
                    <TableRow key={`${outputRow[0]}-${index}`}>
                      <TableCell component="th" scope="row">
                        <code>{outputRow[0]}</code>
                      </TableCell>
                      <TableCell>
                        <code>{Object.keys(DataType).find((key) => DataType[key] === outputRow[1].dtype)}</code>
                      </TableCell>
                      <TableCell>
                        <code>[{outputRow[1].tensorShape.dimList.map((v) => v.size.toString()).join(", ")}]</code>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function SignatureTabDef({ signatureDefMapList }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Signature Name</TableCell>
            <TableCell>Method Name</TableCell>
            <TableCell align="right"># inputs</TableCell>
            <TableCell align="right"># outputs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {signatureDefMapList &&
            signatureDefMapList.map((value, index) => <Row key={`signature-def-${index}`} signatureDef={value} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
