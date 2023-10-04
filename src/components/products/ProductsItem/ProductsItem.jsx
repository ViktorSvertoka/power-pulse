import PropTypes from 'prop-types';
// import sprite from '../../../../src/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

import { getUserParams } from '../../../redux/auth/operations';
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
  const dispatch = useDispatch();
  const data = useSelector(selectUser);
  const bloodType = data.blood;

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  return (
    <ProductsCard>
      <ProductsCardStatus>
        <ProductsCardDiet>
          <ProductsCardDietText>diet</ProductsCardDietText>
        </ProductsCardDiet>
        <ProductsCardStatusCount>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <ProductsCardStatusCountTrue
              isRecommended={el.groupBloodNotAllowed[bloodType]}
            >
              {el.groupBloodNotAllowed[bloodType]
                ? 'Recommended'
                : 'Not recommended'}
            </ProductsCardStatusCountTrue>
          </StyleSheetManager>

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

ProductsItem.propTypes = {
  el: PropTypes.object.isRequired,
  openModalToggle: PropTypes.func.isRequired,
};
