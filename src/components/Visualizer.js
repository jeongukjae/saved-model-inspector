import TabPanel from "./TabPanel"
import Container from "@material-ui/core/Container"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { useState } from "react"
import SignatureDefTab from "./SignatureDefTab"

export default function Visualizer({ savedModelPb }) {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="md">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="Signature Defs" />
        <Tab label="Model Graph" disabled />
        <Tab label="Meta Infos" disabled />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* SignatureDefs */}
        {/* Plot Json */}
        {savedModelPb &&
          savedModelPb.metaGraphsList.map((value, index) => (
            <SignatureDefTab
              key={`signature-def-tab-${index}`}
              signatureDefMapList={value.signatureDefMap}
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Model Graph */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Meta Infos */}
      </TabPanel>
    </Container>
  )
}
