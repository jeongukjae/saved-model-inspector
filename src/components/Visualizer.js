import { useState } from "react"
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

export default function Visualizer({ savedModelPb }) {
  const [value, setValue] = useState(0)
  const handleChange = (_, newValue) => setValue(newValue)
  const [metaGraphIndex, setMetaGraphIndex] = useState(0)
  const handleSetMetaGraphIndex = (e) => setMetaGraphIndex(e.target.value)
  const classes = useStyles()

  const [opListViewCollapse, setopListViewCollapse] = useState(false)
  const [assetFileViewCollapse, setAssetFileViewCollapse] = useState(false)
  const [objectGraphDefCollapse, setObjectGraphDefCollapse] = useState(false)

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
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="Meta Infos" />
        <Tab label="Signature Defs" />
        <Tab label="Model Graph" disabled />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Meta Infos */}
        {savedModelPb && (
          <Box margin={"10px 0"}>
            <ul className={classes.list}>
              <li>
                <Typography variant="p" component="p">
                  TensorFlow Version:{" "}
                  <code>{savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.tensorflowVersion}</code>
                </Typography>
              </li>
              <li>
                <Typography variant="p" component="p">
                  TensorFlow Git Version:{" "}
                  <code>{savedModelPb.metaGraphsList[metaGraphIndex].metaInfoDef.tensorflowGitVersion}</code>
                </Typography>
              </li>
              <li>
                <Typography variant="p" component="p">
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
              <ObjectGraphDefNodeViewer
                nodesList={savedModelPb.metaGraphsList[metaGraphIndex].objectGraphDef.nodesList}
              />
            </Collapse>
          </Box>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {savedModelPb && (
          <SignatureDefTab signatureDefMapList={savedModelPb.metaGraphsList[metaGraphIndex].signatureDefMap} />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Model Graph */}
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
      <Typography variant="p" component="div">
        {children}
      </Typography>
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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
