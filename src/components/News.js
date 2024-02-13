import React from 'react';
import NewsCard from './NewsCard';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';

const News = ({ news }) => {
  console.log(news);
  return (
    <div className="container d-flex justify-content-center align-items-center">
      {news.length > 0 ? (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 container-fluid justify-content-center">
          {news.map((n, index) => (
            <Col key={index}>
              <NewsCard key={index} news={n} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className='mt-10'>
            <div className='h1 align-center'>Sorry !!</div><br/>
            <Spinner animation="border" />
        </div>
        
      )}
    </div>
  );
};

export default News;
