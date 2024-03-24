import Card from 'react-bootstrap/Card';

function HomeCard() {
 return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    My Name is Joseph Porter but you can call me Joey.
                </Card.Text>
            </Card.Body>
        </Card>
 );
}

export default HomeCard;
