import { useEffect, useState } from "react"
import clsx from "clsx"
import SignatureDefTab from "./SignatureDefTab"
import AssetViewer from "./metainfos/AssetViewer"
import {
  makeStyles,
  Typography,
  Select,
  MenuItem,
  Box,
  Container,
  Tabs,
  Tab,
  Button,
  Collapse,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import OpListViewer from "./metainfos/OpListViewer"
import ObjectGraphDefNodeViewer from "./metainfos/ObjectGraphDefNodeViewer"
import ModelGraphViewer from "./metainfos/ModelGraphViewer"

const useStyles = makeStyles({
  selectBox: {
    textAlign: "center",
    "& > *": {
      margin: 10,
    },
  },
  list: {
    "& > *": {
      margin: "5px 0",
    },
  },
})

export default function Inspector({ rawSavedModelPb }) {
  const classes = useStyles()

  const [savedModelPb, setSavedModelPb] = useState()
  useEffect(() => {
    if (rawSavedModelPb) setSavedModelPb(rawSavedModelPb.toObject())
  }, [rawSavedModelPb, setSavedModelPb])

  const [tabIndex, setTabIndex] = useState(0)
  const handleTabIndexChange = (_, newValue) => setTabIndex(newValue)
  const [metaGraphIndex, setMetaGraphIndex] = useState(0)
  const handleSetMetaGraphIndex = (e) => setMetaGraphIndex(e.target.value)

  const [opListViewCollapse, setopListViewCollapse] = useState(false)
  const [assetFileViewCollapse, setAssetFileViewCollapse] = useState(false)
  const [objectGraphDefCollapse, setObjectGraphDefCollapse] = useState(false)

  const [objectGraphDefList, setObjectGraphDefList] = useState([])
  useEffect(() => {
    if (!savedModelPb) {
      setObjectGraphDefList([])
    } else {
      setObjectGraphDefList(
        convertObjectGraphDefNodesList(
          savedModelPb.metaGraphsList[metaGraphIndex].objectGraphDef.nodesList,
          savedModelPb.metaGraphsList[metaGraphIndex].objectGraphDef.nodesList[0],
          ""
        )
      )
    }
  }, [savedModelPb, setObjectGraphDefList, metaGraphIndex])

  return (
    <Container maxWidth="md">
      {savedModelPb && (
        <Box className={classes.selectBox}>
          <Typography component="span">MetaGraph Index</Typography>
          <Select
            labelId="metaGraphIndexLabel"
            id="metaGraphIndex"
            value={metaGraphIndex}
            onChange={handleSetMetaGraphIndex}
          >
            {[...Array(savedModelPb.metaGraphsList.length).keys()].map((_, index) => (
              <MenuItem value={index} key={index}>
                {index}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      <Tabs
        value={tabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabIndexChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="Meta Infos" />
        <Tab label="Signature Defs" />
        <Tab label="Model Graph" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        {/* Meta Infos */}
        {savedModelPb && (
          <Box margin={"10px 0"}>
            <ul className={classes.list}>
              <li>
                <Typography component="p">
                  TensorFlow Version:{" "}
                  <code>{savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.tensorflowVersion}</code>
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  TensorFlow Git Version:{" "}
                  <code>{savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.tensorflowGitVersion}</code>
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Tags: <code>[{savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.tagsList.join(", ")}]</code>
                </Typography>
              </li>
            </ul>
          </Box>
        )}

        {savedModelPb && (
          <Box margin={"10px 0"}>
            <ToggleButton setExpand={setopListViewCollapse} expanded={opListViewCollapse}>
              Operations used in this model
            </ToggleButton>
            <Collapse in={opListViewCollapse}>
              <OpListViewer
                opListDefList={savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.strippedOpList.opList}
              />
            </Collapse>
          </Box>
        )}
        {savedModelPb && (
          <Box margin={"10px 0"}>
            <ToggleButton setExpand={setAssetFileViewCollapse} expanded={assetFileViewCollapse}>
              Asset File Lists
            </ToggleButton>
            <Collapse in={assetFileViewCollapse}>
              <AssetViewer assetFileDefList={savedModelPb.metaGraphsList[metaGraphIndex].assetFileDefList} />
            </Collapse>
          </Box>
        )}
        {savedModelPb && (
          <Box margin={"10px 0"}>
            <ToggleButton setExpand={setObjectGraphDefCollapse} expanded={objectGraphDefCollapse}>
              Object Graph Def Nodes
            </ToggleButton>
            <Collapse in={objectGraphDefCollapse}>
              <ObjectGraphDefNodeViewer nodesList={objectGraphDefList} />
            </Collapse>
          </Box>
        )}
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {savedModelPb && (
          <SignatureDefTab signatureDefMapList={savedModelPb.metaGraphsList[metaGraphIndex].signatureDefMap} />
        )}
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        {/* Model Graph */}
        {savedModelPb && (
          <ModelGraphViewer
            objectGraphDefList={objectGraphDefList}
            functionList={savedModelPb.metaGraphsList[metaGraphIndex].graphDef.library.functionList}
            concreteFunctionsMap={rawSavedModelPb
              .getMetaGraphsList()
              [metaGraphIndex].getObjectGraphDef()
              .getConcreteFunctionsMap()}
          />
        )}
      </TabPanel>
    </Container>
  )
}

const useToggleStyle = makeStyles((theme) => ({
  expand: {
    transform: "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", { duration: theme.transitions.duration.shortest }),
  },
  expandOpen: {
    transform: "rotate(0deg)",
  },
}))

function ToggleButton({ expanded, setExpand, children }) {
  const classes = useToggleStyle()

  const handleExpandClick = () => {
    if (setExpand) setExpand(!expanded)
  }

  return (
    <Button onClick={handleExpandClick} aria-expanded={expanded}>
      <ExpandMoreIcon className={clsx(classes.expand, { [classes.expandOpen]: expanded })} />
      <Typography component="div">{children}</Typography>
    </Button>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function convertObjectGraphDefNodesList(nodesList, node, localName) {
  let results = []

  for (const child of node.childrenList) {
    const childNode = nodesList[child.nodeId]
    const childUserObject = childNode.userObject

    if (
      (!childUserObject ||
        (!childUserObject.identifier.startsWith("_tf_keras") &&
          childUserObject.identifier !== "_generic_user_object" &&
          childUserObject.identifier !== "trackable_list_wrapper")) &&
      (!childNode.pb_function || childNode.pb_function.concreteFunctionsList.length === 0)
    )
      continue

    if (child.localName === "keras_api" && childUserObject.identifier === "_generic_user_object") continue
    if (
      childUserObject &&
      childUserObject.identifier === "trackable_list_wrapper" &&
      (child.localName.endsWith("variables") ||
        child.localName.endsWith("regularization_losses") ||
        child.localName.endsWith("trainable_variables"))
    )
      continue

    results.push({
      nodeId: child.nodeId,
      name: localName + child.localName,
      identifier: childUserObject ? childUserObject.identifier : "",
      metadata: childUserObject ? childUserObject.metadata : "",
      pbFunction: childNode.pb_function ? childNode.pb_function.concreteFunctionsList : [],
    })

    results = results.concat(convertObjectGraphDefNodesList(nodesList, childNode, `${localName}${child.localName}.`))
  }

  return results
}
