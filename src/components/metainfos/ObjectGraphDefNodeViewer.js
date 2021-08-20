import { TableRow, TableCell, Table, TableBody, TableHead, IconButton, Collapse, makeStyles } from "@material-ui/core"
import { useState } from "react"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import clsx from "clsx"

export default function ObjectGraphDefNodeViewer({ nodesList }) {
  return (
    <>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Node Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Metadata</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodesList[0].childrenList.flatMap((child, index) =>
            getListOfTableFromFirstChild(child, nodesList, `node-${index}`)
          )}
        </TableBody>
      </Table>
    </>
  )
}

function getListOfTableFromFirstChild(child, nodesList, key, localName = "") {
  if (
    !nodesList[child.nodeId].userObject ||
    (!nodesList[child.nodeId].userObject.identifier.startsWith("_tf_keras") &&
      nodesList[child.nodeId].userObject.identifier !== "_generic_user_object" &&
      nodesList[child.nodeId].userObject.identifier !== "trackable_list_wrapper")
  ) {
    return []
  }

  if (child.localName === "keras_api" && nodesList[child.nodeId].userObject.identifier === "_generic_user_object")
    return []

  if (
    nodesList[child.nodeId].userObject.identifier === "trackable_list_wrapper" &&
    ["variables", "regularization_losses", "trainable_variables", "state_spec"].includes(child.localName)
  ) {
    return []
  }
  // if (child.localName === "keras_api") return []

  let items = [
    <NodeTableRow
      key={key}
      nodeId={child.nodeId}
      name={localName + child.localName}
      identifier={nodesList[child.nodeId].userObject.identifier}
      metadata={nodesList[child.nodeId].userObject.metadata}
    />,
  ]

  items = items.concat(
    nodesList[child.nodeId].childrenList.flatMap((child_, index) =>
      getListOfTableFromFirstChild(child_, nodesList, `${key}-${index}`, `${localName}${child.localName}.`)
    )
  )

  return items
}

const useNodeTableRowStyle = makeStyles((theme) => ({
  expand: {
    transform: "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", { duration: theme.transitions.duration.shortest }),
  },
  expandOpen: {
    transform: "rotate(0deg)",
  },
  button: {
    padding: 0,
  },
  code: {
    wordBreak: "break-word",
    display: "inline-block",
  },
}))

function NodeTableRow({ nodeId, name, identifier, metadata }) {
  const classes = useNodeTableRowStyle()
  const [expanded, setExpand] = useState()

  const handleExpandClick = () => {
    setExpand(!expanded)
  }

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          <code>{nodeId}</code>
        </TableCell>
        <TableCell>
          <code className={classes.code}>{name}</code>
        </TableCell>
        <TableCell>
          <code>{identifier}</code>
        </TableCell>
        <TableCell>
          {metadata && (
            <IconButton className={classes.button} onClick={handleExpandClick} aria-expanded={expanded}>
              <ExpandMoreIcon className={clsx(classes.expand, { [classes.expandOpen]: expanded })} />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <code>{metadata}</code>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
