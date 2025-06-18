import Breadcrumbs from "@/CoreComponents/Breadcrumbs";
import CommonFileUpload from "@/CoreComponents/CommonFileUpload";
import { AddProductSchema } from "@/Utils/ValidationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, CardBody, Col, Form, FormGroup, Label, Row } from "reactstrap";

const AddProductContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProductSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Add Product" parent="Product" />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xl="6">
                    <FormGroup>
                      <Label>Product Name</Label>
                      <input className="form-control input-air-dark" id="name" type="text" placeholder="Product name" {...register("name")} />
                      {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    </FormGroup>
                  </Col>

                  <Col xl="6">
                    <FormGroup>
                      <Label>Project Title</Label>
                      <input type="text" className="form-control input-air-dark" placeholder="ProjectTitlePlaceholder" {...register("title")} />
                      {errors.title && <p className="text-danger">{errors.title.message}</p>}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xl="6">
                    <FormGroup>
                      <Label>Client Name</Label>
                      <input className="form-control input-air-dark" type="text" placeholder="ClientNamePlaceholder" {...register("client")} />
                      {errors.client && <p className="text-danger">{errors.client.message}</p>}
                    </FormGroup>
                  </Col>

                  <Col xl="6">
                    <FormGroup>
                      <Label>Project Progress (%)</Label>
                      <input className="form-control input-air-dark" type="number" placeholder="ProjectProgressPlaceholder" {...register("progress")} />
                      {errors.progress && <p className="text-danger">{errors.progress.message}</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="custom-dropzone-project">
                    <div className="mb-3">
                      <Label>UploadProjectFiles</Label>
                      <CommonFileUpload multiple />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-center">
                      <Button type="submit" color="primary">
                        Save Product
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddProductContainer;
