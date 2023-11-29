import { Card, Button, Row, Col } from 'react-bootstrap';

export default function PostList() {
    const posts = [
        {
            id: 1,
            title: "Titolo del Post 1",
            excerpt: "Questo è un breve estratto del contenuto del post 1...",
            image: "https://placehold.co/600x400",
        },
        {
            id: 2,
            title: "Titolo del Post 2",
            excerpt: "Questo è un breve estratto del contenuto del post 2...",
            image: "https://placehold.co/600x400",
        }
    ];

    return (
        <main>
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {posts.map(post => (
                        <Col key={post.id}>
                            <Card className="mb-4">
                                {post.image && <Card.Img variant="top" src={post.image} className="img-fluid" />}
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button variant="danger">Leggi di più</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </main>
    );
}
