import { ThreeCircles as Loader } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Loader
        height={50}
        width={50}
        color="var(--orange-color)"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default CustomLoader;
