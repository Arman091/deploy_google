import { Tabs, Paper, Tab } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
const TabsContainer = styled(Paper)({
  flexGrow: 1,
});

const TabLabel = styled(Tab)({
  fontSize: 16,
  color: "#5f6368",
  textTransform: "capitalize",
  height: 10,
  fontWeight: "Bold",
  fontFamily: "Google Sans, Roboto, Arial, sans-serif",
});

const FormTab = (props) => {
  const [value, setvalue] = useState(1);
  const handlechange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <TabsContainer>
      <Tabs centered value={value} onChange={handlechange}>
        <TabLabel label="Questions" value={1} key={1} />
        <TabLabel label="Responses" value={2} key={2} />
      </Tabs>
    </TabsContainer>
  );
};

export default FormTab;
