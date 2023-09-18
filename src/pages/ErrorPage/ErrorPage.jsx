import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Section,
  Left,
  Content,
  Title404,
  Text404,
  Svg,
  StyledLink, 
} from './ErrorPage.styled';
import  Button  from '../../components/HomeBtn/HomeBtn';

import sprite from '../../images/sprite.svg';


const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Section>
      <StyledLink to="/">
         <Svg>
          <use href={`${sprite}#icon-logo-white`} />
        </Svg>
      </StyledLink>
      <Left>
        <Content>
          <Title404>404</Title404>
          <Text404>
            Sorry, you have reached a page that we could not find. It seems
            that you are lost among the numbers and letters of our virtual
            space. Perhaps this page went on vacation or decided to disappear
            into another dimension. We apologize for this inconvenience.
          </Text404>
             <Button
            className="Button"
            text="Go Home"
            type="button"
            onClick={handleClick}
          />
        </Content>
      </Left>
    </Section>
  );
};

export default ErrorPage;
