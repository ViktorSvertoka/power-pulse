import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter, selectProductsList } from "../../../redux/products/selectorsProducts.js";
import { selectUser } from "../../../redux/auth/selectors";
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductsListUl } from './ProductsList.styles';
import BasicModalWindow from '../../BasicModalWindow/BasicModalWindow';
import AddProductForm from "../../AddProductModalWindow/AddProductModalWindow";
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';

import {productListThunk } from '../../../redux/products/operationsProducts';

const filterProducts = (listProducts, filter) => {
  const { category, recommended } = filter;
  const search = filter.search ? filter.search.toLowerCase() : undefined;

  const stepOne = category
    ? listProducts.filter((el) => el.category === category)
    : listProducts;
  const stepTwo =
    recommended === "recommended"
      ? stepOne.filter((el) => el.recommended)
      : recommended === "notRecommended"
      ? stepOne.filter((el) => !el.recommended)
      : stepOne;
  const stepThree = search
    ? stepTwo.filter((el) => el.title.toLowerCase().includes(search))
    : stepTwo;

  return stepThree;
};

export const ProductsList = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const bloodType = useSelector(selectUser);
  const [modalData, setModalData] = useState(null);

  const productsList = useSelector(selectProductsList).map((el) => ({
    ...el,
    // recommended: el.groupBloodNotAllowed[bloodType],
  }));
  const filteredList = filterProducts(productsList, filter);

  useEffect(() => {
    dispatch(productListThunk());
  }, [dispatch]);

  const openModalToggle = (el) => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  


  return (
    <>
    {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {typeof modalData === "object" ? (
            <AddProductForm
              eldata={modalData}
              closeModal={closeModal}
              onClick={openModalToggle}
            />
          ) : (
            <AddProductSuccess closeModal={closeModal} calories={modalData} />
          )}
        </BasicModalWindow>
      )}
      {filteredList.length > 0 ? (
        <ProductsListUl>
          {filteredList.length > 0 &&
            filteredList.slice(0, 100).map(el => <ProductsItem key={el.title} el={el} openModalToggle={openModalToggle} />)}
        </ProductsListUl>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};
