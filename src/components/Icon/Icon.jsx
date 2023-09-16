import PropTypes from 'prop-types';
const spritePath = '/src/images/sprite.svg';

const Icon = ({ symbolId, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${spritePath}#${symbolId}`} />
    </svg>
  );
};

Icon.propTypes = {
  symbolId: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Icon;
