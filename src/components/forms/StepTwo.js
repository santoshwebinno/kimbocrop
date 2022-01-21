import react, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Tooltip,
} from "reactstrap";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";

export default function StepTwo() {
  const [open, setOpen] = useState(false);
  const showTooltip = () => {
    setOpen(!open);
  };
  return (
    <Card className="steps-block">
      <Card className="section-title">
        <CardTitle tag="h2" className="text-center title-with-tooltip">
          <strong>
            Are you the ultimate beneficial owner of this business?
          </strong>
          <div>
            <a
              href="#"
              id="TooltipExample"
              className="form-tooltip"
              onMouseOver={showTooltip}
            >
              !
            </a>

            <Tooltip
              flip
              placement="right"
              target="TooltipExample"
              isOpen={open}
            >
              A shareholder owns a share in the business in exchange for his
              financial or technical contribution towards the business. A share
              is a portion of the business.
              <br />A shareholder may be an individual, a company or a limited
              liability partnership. By allocating shares to any of the
              aforementioned, the person or entity become partial owner of the
              business.
            </Tooltip>
          </div>
        </CardTitle>
        <CardText>
          Ultimate beneficial owner is a person who owns more than 25% of the
          business.
        </CardText>
      </Card>
      <Row>
        <Col xs="6">
          <Card className="steps-detail-block">
            <img src={icon3} />
            <CardText>
              Yes, I am the ultimate
              <br />
              beneficial owner of this
              <br />
              business
            </CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="steps-detail-block">
            <img src={icon4} />
            <CardText>
              No, I am not the
              <br />
              ultimate beneficial
              <br />
              owner of this business
            </CardText>
          </Card>
        </Col>
      </Row>

      <Card className="step-business-section">
        <Card className="section-title ">
          <CardTitle tag="h2" className="title-with-tooltip">
            <strong>Do you have other shareholders in this business?</strong>
            <div>
              <a
                href="#"
                id="TooltipExample"
                className="form-tooltip"
                onMouseOver={showTooltip}
              >
                !
              </a>

              <Tooltip
                flip
                placement="right"
                target="TooltipExample"
                isOpen={open}
              >
                A shareholder owns a share in the business in exchange for his
                financial or technical contribution towards the business. A
                share is a portion of the business.
                <br />A shareholder may be an individual, a company or a limited
                liability partnership. By allocating shares to any of the
                aforementioned, the person or entity become partial owner of the
                business.
              </Tooltip>
            </div>
          </CardTitle>
        </Card>
        <Row>
          <Col xs="6">
            <Card className="steps-detail-block">
              <img src={icon3} />
              <CardText>
                Yes, there are other
                <br />
                shareholders in this
                <br />
                business.
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="steps-detail-block">
              <img src={icon4} />
              <CardText>
                No, I am the only
                <br />
                shareholder in this
                <br />
                business.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card className="steps-form shareholder-form">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>Information about other shareholder</strong>
          </CardTitle>
        </Card>
        <Form>
          <FormGroup>
            <Input name="" placeholder="First Name" type="text" />
            <Input name="" placeholder="Last name" type="text" />
          </FormGroup>
          <FormGroup>
            <div className="email-check">
              <Input name="" placeholder="Email address" type="email" />
              <Button>Check</Button>
            </div>

            <Input name="" placeholder="Mobile number" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="" placeholder="Mobile number" type="text" />
            <div className="add-another">
              <Button>Add another</Button>
            </div>
          </FormGroup>

          <FormGroup className="step-from-btn">
            <Button>Back</Button>
            <Button>Save & Next</Button>
          </FormGroup>
        </Form>
      </Card>
    </Card>
  );
}
