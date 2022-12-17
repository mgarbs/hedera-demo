import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubmitMessage() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTopicIdl">
                <Form.Label>Topic ID</Form.Label>
                <Form.Control type="text" placeholder="Enter topic ID (<shardNum>,<realmNum>,<topicID>)" />
                <Form.Text className="text-muted">
                    e.g 0.0.12345
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTopicMessage">
                <Form.Label>Topic Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit Message
            </Button>
        </Form>
    );
}

export default SubmitMessage;