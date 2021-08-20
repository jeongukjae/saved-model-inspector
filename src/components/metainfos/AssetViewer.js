import { TableRow, TableCell, Table, TableBody, TableHead } from "@material-ui/core"
import { DataType } from "../../proto/tensorflow/core/framework/types_pb"

export default function AssetViewer({ assetFileDefList }) {
  return (
    <>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell>Tensor Name</TableCell>
            <TableCell>Tensor Data Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assetFileDefList.map((asset, index) => (
            <TableRow key={`asset-${index}`}>
              <TableCell component="th" scope="row">
                <code>{asset.filename}</code>
              </TableCell>
              <TableCell>
                <code>{asset.tensorInfo.name}</code>
              </TableCell>
              <TableCell>
                <code>{Object.keys(DataType).find((key) => DataType[key] === asset.tensorInfo.dtype)}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
