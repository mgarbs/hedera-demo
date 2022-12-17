import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SubmitMessage from './SubmitMessage';
import CreateTopic from './CreateTopic';
import UpdateTopic from './UpdateTopic';
import DeleteTopic from './DeleteTopic';
import Topic from './Topic';

function HCSTabs() {
  return (
    <Tab.Container id="hcs-tabs" defaultActiveKey="#create-topic">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#create-topic">
              Create topic
            </ListGroup.Item>
            <ListGroup.Item action href="#update-topic">
              Update topic
            </ListGroup.Item>
            <ListGroup.Item action href="#submit-topic-message">
              Submit topic message
            </ListGroup.Item>
            <ListGroup.Item action href="#delete-topic">
              Delete topic
            </ListGroup.Item>
            <ListGroup.Item action href="#query-topic">
              Query topic
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#create-topic">
              <CreateTopic />
            </Tab.Pane>
            <Tab.Pane eventKey="#update-topic">
              <UpdateTopic />
            </Tab.Pane>
            <Tab.Pane eventKey="#submit-topic-message">
              <SubmitMessage />
            </Tab.Pane>
            <Tab.Pane eventKey="#delete-topic">
              <DeleteTopic />
            </Tab.Pane>
            <Tab.Pane eventKey="#query-topic">
              <Topic />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default HCSTabs;