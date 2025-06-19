import Breadcrumbs from "@/CoreComponents/Breadcrumbs";
import { Fragment } from "react";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";
import GridView from "./GridView";
import { RouteList } from "@/Constant";
import Link from "next/link";

const CategoryContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Category" parent="Pages" />
      <Container fluid className="product-wrapper">
        <div className="product-grid">
          <div className="feature-products">
            <Row>
              <Col md="10">
                <Form>
                  <div className="form-group m-0">
                    <Input type="text" placeholder={"Search"} />
                    <i className="fa fa-search"></i>
                  </div>
                </Form>
              </Col>
              <Col md="2" sm="12">
                <Form>
                  <div className="form-group">
                    <Link href={RouteList.Category.AddCategory}>
                      <Button color="primary" className="w-100">
                        Add Category
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
          <GridView />
        </div>
      </Container>
    </Fragment>
  );
};

export default CategoryContainer;
