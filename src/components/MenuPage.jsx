import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Inas Moroccan Couscous ',
      description: 'Description for Item 1',
      price: '$10.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/16/0/FN_Ina-Garten-Moroccan-Couscous-H-050_s4x3.jpg.rend.hgtvcom.791.594.suffix/1518807264414.jpeg', 
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button>
    },
    {
      id: 2,
      name: 'Smashed Cucumber Salad',
      description: 'Description for Item 2',
      price: '$12.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_SMASHED_CUCUMBER_SALAD_H_f_s4x3.jpg.rend.hgtvcom.791.594.suffix/1620410624157.jpeg', 
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button>
    },
    {
      id: 3,
      name: 'Hasselback Sweet Potatoes',
      description: 'Description for Item 3',
      price: '$8.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/14/0/cc_hasselback-sp_s4x3.jpg.rend.hgtvcom.791.594.suffix/1382541177866.jpeg',
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button> 
    },
    {
      id: 4,
      name: 'Hasselback Sweet Potatoes',
      description: 'Description for Item 3',
      price: '$8.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/14/0/cc_hasselback-sp_s4x3.jpg.rend.hgtvcom.791.594.suffix/1382541177866.jpeg', 
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button>
    },
    {
      id: 5,
      name: 'Hasselback Sweet Potatoes',
      description: 'Description for Item 3',
      price: '$8.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/14/0/cc_hasselback-sp_s4x3.jpg.rend.hgtvcom.791.594.suffix/1382541177866.jpeg', 
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button>
    },
    {
      id: 6,
      name: 'Hasselback Sweet Potatoes',
      description: 'Description for Item 3',
      price: '$8.99',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/14/0/cc_hasselback-sp_s4x3.jpg.rend.hgtvcom.791.594.suffix/1382541177866.jpeg', 
      button : <button type="button" className="btn btn-outline-primary ">Book Now </button>
    },
    
  ];

  return (
    <Container>
      <h1 className="my-4">Menu</h1>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} md={4}>
            <Card className="mb-4 card">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text-muted">{item.price}</Card.Text>
                <Card.Text >{item.button}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;