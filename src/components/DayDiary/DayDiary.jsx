import PropTypes from 'prop-types';

import {
  DayDiaryContainer,
  DayDiarySubTitle,
  AddLink,
  DayNoContentText,
  ArrowRight,
  DayDiarySubDiv,
} from './DayDiary.styled';
import sprite from '../../assets/sprite.svg';
import ProductsTable from '../ProductsTable/ProductsTable';

const DayDiary = ({ products, to, isDayProducts }) => {
  return (
    <DayDiaryContainer>
      <DayDiarySubDiv>
        <DayDiarySubTitle>
          {isDayProducts ? 'Products' : 'Exercises'}
        </DayDiarySubTitle>
        <AddLink to={to}>
          Add {isDayProducts ? 'product' : 'exercise'}
          <ArrowRight>
            <use href={sprite + `#arrow-right`}></use>
          </ArrowRight>
        </AddLink>
      </DayDiarySubDiv>
      {products.length !== 0 ? (
        <ProductsTable products={products} />
      ) : (
        <DayNoContentText>
          Not found {isDayProducts ? 'products' : 'exercises'}
        </DayNoContentText>
      )}
    </DayDiaryContainer>
  );
};

DayDiary.propTypes = {
  to: PropTypes.string,
  isDayProducts: PropTypes.string,
  products: PropTypes.array,
};

export default DayDiary;
