import React from 'react';
import Card from 'react-bootstrap/Card';

const BasicCard = (props) => {
  const { header, content, footer } = props;
  return (
    <Card className="h-100">
      {header && <Card.Header>{header}</Card.Header>}
      {content && <Card.Body>{content}</Card.Body>}
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  );
};

export default BasicCard;
