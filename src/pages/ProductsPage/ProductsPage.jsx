import { ProductsFilter } from '../../../src/components/products/ProductsFilter/ProductsFilter';
import { ProductsList } from '../../components/products/ProductsList/ProductsList';
import { Container } from '../../styles/container';
import { Wrapper, ProductsTitle } from './ProductsPage.styles';

const ProductsPage = () => {
  return (
    <Container>
      <Wrapper>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter/>
        <ProductsList/>
      </Wrapper>
    </Container>
  );
};

export default ProductsPage;
