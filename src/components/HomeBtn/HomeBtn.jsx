import PropTypes from "prop-types";
import  Button  from './HomeBtn.styled';

const HomeBtn = ({ className = "", text, type, onClick }) => {
  return (
    <Button
      className={className} 
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

HomeBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default HomeBtn;