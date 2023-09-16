// import sprite from '../../../../src/images/sprite.svg';

import { ProductsCard,
   ProductsCardStatus, 
   ProductsCardDiet, 
   ProductsCardDietText,
   ProductsCardStatusCount,
   ProductsCardStatusCountTrue,
   ProductsCardStatusAdd,
   ProductsCardTitle,
   ProductsCardInfoList,
   ProductsCardInfoItem,
   ProductsCardInfoValue} from "./ProductsItem.styles";

export const ProductsItem = (el) => {
  

  return (
    <ProductsCard >
      <ProductsCardStatus >
        <ProductsCardDiet >
          <ProductsCardDietText>diet</ProductsCardDietText>
        </ProductsCardDiet>
        <ProductsCardStatusCount >
          <ProductsCardStatusCountTrue>Reccomend</ProductsCardStatusCountTrue>

          <ProductsCardStatusAdd  type="button">
            Add
          </ProductsCardStatusAdd>
          
        </ProductsCardStatusCount>
      </ProductsCardStatus>
      <ProductsCardTitle>{el.el.title}</ProductsCardTitle>

      <ProductsCardInfoList >
        <ProductsCardInfoItem >
          Calories:{" "}
          <ProductsCardInfoValue>{el.el.calories || "999"}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          Category:{" "}
          <ProductsCardInfoValue>{el.el.category || "999"}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem >
          Weight:{" "}
          <ProductsCardInfoValue >{el.el.weight || "300"}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
      </ProductsCardInfoList>
    </ProductsCard>
  );
};
