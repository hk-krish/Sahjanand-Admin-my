import Breadcrumbs from "@/CoreComponents/Breadcrumbs";
import Information from "@/CoreComponents/Information";
import { FormEvent, Fragment, useState } from "react";
import { Col, Container } from "reactstrap";

const AboutUsContainer = () => {
  const [editorContent, setEditorContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(editorContent);
      setIsEditing(false);
    } catch (error) {
    }
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="About" parent="Pages" />
      <Container fluid>
        <Col xl="12">
          <Information headerTitle="About Us" editorContent={editorContent} setEditorContent={setEditorContent} handleSubmit={handleSubmit} isEditing={isEditing} setIsEditing={setIsEditing}/>
        </Col>
      </Container>
    </Fragment>
  );
};

export default AboutUsContainer;
