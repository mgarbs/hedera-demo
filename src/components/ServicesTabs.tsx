import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HCSTabs from './HCSTabs';

function ServicesTabs() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="hcs" title="Hedera Consensus Service">
                <HCSTabs />
            </Tab>
            <Tab eventKey="hts" title="Hedera Token Service">
                <HCSTabs />
            </Tab>
            <Tab eventKey="hscs" title="Hedera Smart Conracts">
                <HCSTabs />
            </Tab>
        </Tabs>
    );
}

export default ServicesTabs;