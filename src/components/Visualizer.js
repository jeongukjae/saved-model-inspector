import TabPanel from "./TabPanel"
import { useState } from "react"
import SignatureDefTab from "./SignatureDefTab"
import AssetViewer from "./AssetViewer"
import { makeStyles, Typography, Select, MenuItem, Box, Container, Tabs, Tab } from "@material-ui/core"

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
        {savedModelPb && <AssetViewer assetFileDefList />}
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
