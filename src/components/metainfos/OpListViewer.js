import { TableRow, TableCell, Table, TableBody, TableHead } from "@material-ui/core"
import { DataType } from "../../proto/tensorflow/core/framework/types_pb"

export default function OpListViewer({ opListDefList }) {
  return (
    <>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Op Name</TableCell>
            <TableCell>Signature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {opListDefList.map((op, index) => (
            <TableRow key={`op-${index}`}>
              <TableCell component="th" scope="row">
                <code>{op.name}</code>
              </TableCell>
              <TableCell>
                <code>{opToSignature(op)}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

function opToSignature(op) {
  let templateArgs = op.attrList.map((val) => `${val.type} ${val.name}`).join(", ")
  if (op.attrList.length > 0) {
    templateArgs = "<" + templateArgs + ">"
  }

  const inputs = op.inputArgList.map(argToSignature).join(", ")
  let outputs = op.outputArgList.map(argToSignature).join(", ")
  if (outputs.length > 1) outputs = "(" + outputs + ")"
  if (outputs.length > 0) outputs = "-> " + outputs

  return `${op.name}${templateArgs}(${inputs}) ${outputs}`
}

function argToSignature(arg) {
  if (arg.type) {
    return `${Object.keys(DataType).find((key) => DataType[key] === arg.type)} ${arg.name}`
  } else if (arg.typeAttr) {
    return `${arg.typeAttr} ${arg.name}`
  }
}
