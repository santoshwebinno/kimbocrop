import react, { useState } from "react";
import { Card, CardTitle, Col, Row, Table, CardText } from "reactstrap";
import NewDirector from "../popup/new-director";

export default function Invite() {
  const [show8, setShow8] = useState(false);
  const showPopup8 = () => {
    setShow8(true);
  };
  return (
    <Card className="promoter-section">
      <Row>
        {show8 ? <NewDirector show8={show8} setShow8={setShow8} /> : ""}
        <Col xs="8">
          <Card className="detail-business-block shareholders-block">
            <Card className="detail-business-header">
              <CardTitle tag="h3">Promoter</CardTitle>
              <a href="#">Add Collaborator</a>
            </Card>

            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>

                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name Last Name</td>

                  <td className="text-right">
                    <a href="#">Edit</a>
                    <a href="#">Resign</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col xs="4">
          <Card className="sidebar-block text-center">
            <CardTitle tag="h3">
              <strong>Add a company director</strong>
            </CardTitle>
            <br />
            <CardText>
              Every business registered in Singapore must have at least one
              director who is a Singaporean or Singaporean Permanent Resident.
            </CardText>
            <a href="#" onClick={showPopup8}>
              Add a director
            </a>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
