import TabPanel from "./TabPanel"
import { useEffect, useState } from "react"
import clsx from "clsx"
import SignatureDefTab from "./SignatureDefTab"
import AssetViewer from "./AssetViewer"
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

const useStyles = makeStyles({
  selectBox: {
    textAlign: "center",
    "& > *": {
      margin: 10,
    },
  },
})

export default function Visualizer({ savedModelPb }) {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)
  const [metaGraphIndex, setMetaGraphIndex] = useState(0)
  const handleSetMetaGraphIndex = (e) => setMetaGraphIndex(e.target.value)
  const classes = useStyles()

  const [assetFileViewCollapse, setAssetFileViewCollapse] = useState(true)

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
          <>
            <ToggleButton setExpand={setAssetFileViewCollapse}>Asset File Lists</ToggleButton>
            <Collapse in={assetFileViewCollapse}>
              <AssetViewer assetFileDefList={savedModelPb.metaGraphsList[metaGraphIndex].assetFileDefList} />
            </Collapse>
          </>
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

function ToggleButton({ setExpand, children }) {
  const classes = useToggleStyle()
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    if (setExpand) setExpand(expanded)
  }, [expanded, setExpand])

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Button onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
      />
      <Typography variant="p" component="div">
        {children}
      </Typography>
    </Button>
  )
}
