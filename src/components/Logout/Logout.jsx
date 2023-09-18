import sprite from '../../images/sprite.svg';
import { LogoutLink, Text } from './Logout.styled';

const Logout = () => {
  return (
    <LogoutLink to="/">
      <Text>Logout</Text>
      <svg width="24" height="24">
        <use href={`${sprite}#icon-log-out`}></use>
      </svg>
    </LogoutLink>
  );
};

export default Logout;
