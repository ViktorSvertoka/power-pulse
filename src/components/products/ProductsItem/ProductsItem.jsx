/* eslint-disable react/prop-types */
// import sprite from '../../../../src/images/sprite.svg';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/auth/selectors';

import {
  ProductsCard,
  ProductsCardStatus,
  ProductsCardDiet,
  ProductsCardDietText,
  ProductsCardStatusCount,
  ProductsCardStatusCountTrue,
  ProductsCardStatusAdd,
  ProductsCardTitle,
  ProductsCardInfoList,
  ProductsCardInfoItem,
  ProductsCardInfoValue,
} from './ProductsItem.styles';

export const ProductsItem = ({ el, openModalToggle }) => {
  const bloodType = useSelector(selectUser);
  console.log(el);

  return (
    <ProductsCard>
      <ProductsCardStatus>
        <ProductsCardDiet>
          <ProductsCardDietText>diet</ProductsCardDietText>
        </ProductsCardDiet>
        <ProductsCardStatusCount>
          <ProductsCardStatusCountTrue>
            {el ? 'Recommended' : 'Not recommended'}
          </ProductsCardStatusCountTrue>

          <ProductsCardStatusAdd
            onClick={() => {
              openModalToggle(el);
            }}
            type="button"
          >
            Add
          </ProductsCardStatusAdd>
        </ProductsCardStatusCount>
      </ProductsCardStatus>
      <ProductsCardTitle>{el.title}</ProductsCardTitle>

      <ProductsCardInfoList>
        <ProductsCardInfoItem>
          Calories:{' '}
          <ProductsCardInfoValue>{el.calories || '999'}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          Category:{' '}
          <ProductsCardInfoValue>{el.category || '999'}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          Weight:{' '}
          <ProductsCardInfoValue>{el.weight || '300'}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
      </ProductsCardInfoList>
    </ProductsCard>
  );
};
