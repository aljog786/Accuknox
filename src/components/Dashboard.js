import { Card, Row, Col, Button, Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container fluid>
      <h2 className="my-4">CNAPP Dashboard</h2>
      <h3>CSPM Executive Dashboard</h3>
      <Row className="gy-4"> {/* Use gy-4 to add vertical space between rows */}
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Cloud Accounts</Card.Title>
              <Card.Text>Details about cloud accounts.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Cloud Account Risk Assessment</Card.Title>
              <Card.Text>Risk assessments for cloud accounts.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100 text-center">
          <Card.Body className="d-flex flex-column justify-content-center">
              <Button className='w-50 align-self-center' variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="my-4">CWPP Dashboard</h3>

      <Row className="gy-4">
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Top 5 Namespace Specific Alerts</Card.Title>
              <Card.Text>No graph data available.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Workload Alerts</Card.Title>
              <Card.Text>No graph data available.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100 text-center">
          <Card.Body className="d-flex flex-column justify-content-center">
              <Button className='w-50 align-self-center' variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="my-4">Registry Scan</h3>

      <Row className="gy-4">
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Image Risk Assessment</Card.Title>
              <Card.Text>Image risks assessments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Image Security Issues</Card.Title>
              <Card.Text>Details about security issues.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100 text-center">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Button className='w-50 align-self-center' variant="light">+ Add Widget</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
