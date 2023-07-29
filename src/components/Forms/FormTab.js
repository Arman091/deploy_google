import { Tabs, Paper, Tab } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import QuestionForm from "./Question_Form";
import Userform from "./UserForm";
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

const FormTab = () => {
  const [value, setvalue] = useState(1);
  const handlechange = (event,newValue) => {
    setvalue(newValue);
  };
  return (
    <TabsContainer>
      <Tabs centered value={value} onChange={handlechange}>
        <TabLabel label="Questions" value={1} key={1} />
        <TabLabel label="Responses" value={2} key={2} />
      </Tabs>
      {value === 1 && <QuestionForm />}
      {/* Render QuestionForm inside "Questions" tab */}
      {value === 2 && <Userform/>}
      {/* Placeholder for "Responses" tab */}
    </TabsContainer>
  );
};

export default FormTab;
