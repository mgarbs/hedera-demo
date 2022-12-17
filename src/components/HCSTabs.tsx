import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SubmitMessage from './SubmitMessage';

function HCSTabs() {
  return (
    <Tab.Container id="hcs-tabs" defaultActiveKey="#create-topic">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#create-topic">
              Create a topic
            </ListGroup.Item>
            <ListGroup.Item action href="#update-topic">
              Update a topic
            </ListGroup.Item>
            <ListGroup.Item action href="#submit-topic-message">
              Submit topic message
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#create-topic">
              <SubmitMessage />
            </Tab.Pane>
            <Tab.Pane eventKey="#update-topic">
              <SubmitMessage />
            </Tab.Pane>
            <Tab.Pane eventKey="#submit-topic-message">
              <SubmitMessage />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default HCSTabs;