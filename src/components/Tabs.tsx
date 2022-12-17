import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SubmitMessage from './SubmitMessage';

function ServicesTabs() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="hcs" title="Hedera Consensus Service">
                <SubmitMessage />
            </Tab>
            <Tab eventKey="hts" title="Hedera Token Service">
                <SubmitMessage />
            </Tab>
            <Tab eventKey="hscs" title="Hedera Smart Conracts">
                <SubmitMessage />
            </Tab>
        </Tabs>
    );
}

export default ServicesTabs;