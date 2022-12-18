import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

// import {BladeSigner, HederaNetwork} from '@bladelabs/blade-web3.js';



// async function initBlade() {
//     const bladeSigner = new BladeSigner();
//     const params = {
//       network: HederaNetwork.Testnet,
//       // dAppCode - optional while testing, request specific one by contacting us.
//       dAppCode: "yourAwesomeApp"
//     }
//     // create session with optional parameters.
//     await bladeSigner.createSession(params);

//     // bladeSigner object can now be used.
//     bladeSigner.getAccountId();
// }

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