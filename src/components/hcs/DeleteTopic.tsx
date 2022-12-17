import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeleteTopic() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTopicId">
                <Form.Label>Topic ID</Form.Label>
                <Form.Control type="text" placeholder="Enter topic ID to delete (<shardNum>,<realmNum>,<topicID>)" />
                <Form.Text className="text-muted">
                    e.g 0.0.12345
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Delete Topic
            </Button>
        </Form>
    );
}

export default DeleteTopic;