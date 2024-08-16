import { Card, Row, Col, Button, Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container fluid>
      <h2 className="my-4">CNAPP Dashboard</h2>

      <Row>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Cloud Accounts</Card.Title>
              <Card.Text>Details about cloud accounts.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Cloud Account Risk Assessment</Card.Title>
              <Card.Text>Risk assessments for cloud accounts.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4 text-center">
          <Card.Body>
          <Button variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="my-4">CWPP Dashboard</h3>

      <Row>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Top 5 Namespace Specific Alerts</Card.Title>
              <Card.Text>No graph data available.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Workload Alerts</Card.Title>
              <Card.Text>No graph data available.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4 text-center">
          <Card.Body>
          <Button variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="my-4">Registry Scan</h3>

      <Row>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Image Risk Assessment</Card.Title>
              <Card.Text>Image risks assessments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Image Security Issues</Card.Title>
              <Card.Text>Details about security issues.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4 text-center">
          <Card.Body>
          <Button variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;