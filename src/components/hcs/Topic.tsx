import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Topic() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTopicId">
                <Form.Label>Topic ID</Form.Label>
                <Form.Control type="text" placeholder="Enter topic ID to query (<shardNum>,<realmNum>,<topicID>)" />
                <Form.Text className="text-muted">
                    e.g 0.0.12345
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Get Topic
            </Button>
        </Form>
    );
}

export default Topic;