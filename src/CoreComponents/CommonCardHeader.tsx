import { FC } from "react";
import { Button, CardHeader, Col, Form, Input, Row } from "reactstrap";
import { CardHeaderProp } from "../Types/CoreComponents";

const CommonCardHeader: FC<CardHeaderProp> = ({ title, headClass, tagClass, setIsEditing, isEditing, Search, btnTitle, btnClick }) => {
  return (
    <CardHeader className={`card-header-box ${headClass ? headClass : "pb-0"}`}>
      <Row>
        {title && (
          <Col md="10" sm="7" xs="12" className="d-flex align-items-center">
            <h4 className={tagClass ? tagClass : ""}>{title}</h4>
          </Col>
        )}
        {Search && (
          <Col md="10" sm="7" xs="12" className="feature-products-table">
            <Form>
              <div className="form-group">
                <Input type="text" placeholder={"Search"} />
                <i className="fa fa-search"></i>
              </div>
            </Form>
          </Col>
        )}
        {setIsEditing && (
          <Col md="2" sm="5" xs="12">
            <Form>
              <div className="form-group m-0">
                <Button color="primary" className="w-100 mt-2 mt-sm-0" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </div>
            </Form>
          </Col>
        )}
        {btnClick && (
          <Col md="2" sm="5" xs="12" className="feature-products-table">
            <Form>
              <div className="form-group">
                <Button color="primary" className="w-100" onClick={() => btnClick()}>
                  {btnTitle}
                </Button>
              </div>
            </Form>
          </Col>
        )}
      </Row>
    </CardHeader>
  );
};

export default CommonCardHeader;
