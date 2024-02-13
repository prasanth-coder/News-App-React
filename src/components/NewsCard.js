import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({news}) => {
    console.log(news)
    console.log(news.urlToImage)
  return (
    <Card style={{ width: '18rem', minHeight:"400px"}}>
        
      <Card.Img variant="top" src={news.urlToImage===undefined ? "./image.png" : news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        
        <Button variant="primary" href={news.url}>Get Full News</Button>
      </Card.Body>
    </Card>
    
  )
}

export default NewsCard
