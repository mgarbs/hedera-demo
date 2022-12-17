import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function CreateTopic() {
    return (
        <Form>
            <Form.Group as={Col} controlId="formTopicAdminKey">
                <Form.Label>Set admin key</Form.Label>
                <Form.Control type="text" placeholder="Set topic admin key" />
            </Form.Group>
            <Form.Group as={Col} controlId="formTopicSubmitKey">
                <Form.Label>Set submit key(s)</Form.Label>
                <Form.Control type="text" placeholder="Set topic submit key(s). Separate multiple keys by commas" />
            </Form.Group>
            <Form.Group as={Col} controlId="formTopicMemo">
                <Form.Label>Set memo</Form.Label>
                <Form.Control type="text" placeholder="Set topic memo" />
            </Form.Group>
            <Form.Group as={Col} controlId="formTopicRenewalAccount">
                <Form.Label>Set topic renewal account</Form.Label>
                <Form.Control type="text" placeholder="Account ID (<realm>.<shard>.<accountNum>) e.g 0.0.12345" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Topic
            </Button>
        </Form>
    );
}

export default CreateTopic;