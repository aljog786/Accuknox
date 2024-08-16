import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl, Modal, Tab, Nav as NavTabs } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
function DashboardNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container fluid>
        <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>Dashboard V2</Breadcrumb.Item>
    </Breadcrumb>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex mx-auto">
              <FormControl
                type="search"
                placeholder="Search anything..."
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="align-items-center">
              <Button variant="outline-secondary" className="me-2">
                <i className="bi bi-arrow-clockwise"></i> Refresh
              </Button>
              <Nav.Link href="#">Last 2 Days</Nav.Link>
              <Button variant="primary" onClick={handleShow}>Add Widget</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-right" backdrop={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Widget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Personalize your dashboard by adding the following widget</p>
          <Tab.Container defaultActiveKey="CSPM">
            <NavTabs variant="tabs">
              <NavTabs.Item>
                <NavTabs.Link eventKey="CSPM">CSPM</NavTabs.Link>
              </NavTabs.Item>
              <NavTabs.Item>
                <NavTabs.Link eventKey="CWPP">CWPP</NavTabs.Link>
              </NavTabs.Item>
              <NavTabs.Item>
                <NavTabs.Link eventKey="Image">Image</NavTabs.Link>
              </NavTabs.Item>
              <NavTabs.Item>
                <NavTabs.Link eventKey="Ticket">Ticket</NavTabs.Link>
              </NavTabs.Item>
            </NavTabs>
            <Tab.Content>
              <Tab.Pane eventKey="CSPM">
                <Form.Check type="checkbox" label="Cloud Accounts" />
                <Form.Check type="checkbox" label="Cloud Account Risk Assessment" />
              </Tab.Pane>
              <Tab.Pane eventKey="CWPP">
                {/* Add content for CWPP */}
              </Tab.Pane>
              <Tab.Pane eventKey="Image">
                {/* Add content for Image */}
              </Tab.Pane>
              <Tab.Pane eventKey="Ticket">
                {/* Add content for Ticket */}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DashboardNavbar;
