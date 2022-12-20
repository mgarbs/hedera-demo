import {Component} from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

import {BladeSigner, HederaNetwork} from '@bladelabs/blade-web3.js';
import {AccountId} from "@hashgraph/sdk";

interface Props {

}

interface State {
    show: boolean,
    accountId: AccountId | null
}

export default class WalletConnector extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show: false,
            accountId: null
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.initBlade = this.initBlade.bind(this);
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleClose() {
        this.setState({ show: false })
    }



    async initBlade () {
        const bladeSigner = new BladeSigner();

        const params = {
            network: HederaNetwork.Testnet,
            // dAppCode - optional while testing, request specific one by contacting us.
            dAppCode: "yourAwesomeApp"
        }

        // create session with optional parameters.
        await bladeSigner.createSession(params);

        // bladeSigner object can now be used.
        const accountId = bladeSigner.getAccountId();

        this.setState({ accountId: accountId })

        console.log({accountId});
        this.handleClose();
    }


    render() {
        return (
            <>
                <div style={{ display: "flex" }}>
                    <Button variant="primary" onClick={this.handleShow}
                            style={{ marginLeft: "auto" }}
                    >
                        Connect Wallet
                    </Button>
                </div>
                <>accountId: {this.state.accountId?.toString()}</>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Select wallet to connect</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ButtonGroup vertical style={{ display: "flex" }}>
                            <Button onClick={this.initBlade}>Blade</Button>
                            <Button>Hashpack</Button>
                        </ButtonGroup>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
