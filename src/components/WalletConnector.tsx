import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function WalletConnector() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div style={{ display: "flex" }}>
                <Button variant="primary" onClick={handleShow}
                    style={{ marginLeft: "auto" }}
                >
                    Connect Wallet
                </Button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select wallet to connect</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ButtonGroup vertical style={{ display: "flex" }}>
                        <Button>Blade</Button>
                        <Button>Hashpack</Button>
                    </ButtonGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WalletConnector;