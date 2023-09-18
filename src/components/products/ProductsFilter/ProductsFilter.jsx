// import sprite from '../../../../src/images/sprite.svg';
import sprite from '../../../../src/images/sprite.svg';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import {
  ProductsFilterLabel,
  ProductsFilterSearch,
  ProductsBtnClouse,
  ProductsSvgClouse,
  ProductsBtnSearch,
  ProductsSvgSearch,
  SelectWrapper,
  ProductsFilterList,
} from './ProductsFilter.styles';

const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];

const categories = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];

export const ProductsFilter = () => {
  const [recommended, setRecommended] = useState(optionsRec[0]);

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const categoriesList = categories?.map(el => ({
    value: el,
    label: capitalizeFirstLeter(el),
  }));

  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 769 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  let height = '';
  isMobile ? (height = '46px') : (height = '52px');
  isTablet ? (height = '52px') : (height = '46px');
  isDesktop ? (height = '52px') : (height = '46px');

  // let width = "";
  // isMobile ? (width = "173px") : (width = "173px");
  // isTablet ? (width = "173px") : (width = "192px");
  // isDesktop ? (width = "192px") : (width = "192px");
  const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: 'trasparent', // Стилизация фона окна
      height: height,
      // width: width,
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'rgba(28, 28, 28, 1)'
        : isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)', // Стилизация фона активной опции и ховера
      color: isSelected ? '#E6533C' : '#EFEDE8', // Стилизация цвета текста активной опции в списке
      padding: '14px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: 'rgba(28, 28, 28, 1)', //  фон для списка
    }),
    singleValue: provided => ({
      ...provided,
      color: '#EFEDE8', // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'transparent', // Цвет разделителя
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: '#EFEDE8',
    }),
    container: provided => ({
      ...provided,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
    }),
    menuList: base => ({
      ...base,
      borderRadius: '12px', // Бордер при скроле

      '::-webkit-scrollbar': {
        display: 'none',
      },
      overflowY: 'scroll',
    }),
  };

  return (
    <ProductsFilterList>
      <li>
        <ProductsFilterLabel>
          <ProductsFilterSearch type="text" placeholder="Search" />
          <ProductsBtnClouse type="button">
            <ProductsSvgClouse>
              <use href={sprite + '#icon-x'}></use>
            </ProductsSvgClouse>
          </ProductsBtnClouse>
          <ProductsBtnSearch type="button">
            <ProductsSvgSearch>
              <use href={sprite + '#icon-search'}></use>
            </ProductsSvgSearch>
          </ProductsBtnSearch>
        </ProductsFilterLabel>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            placeholder="Categories"
            options={categoriesList || []}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                primary: 'transparent',
                neutral40: '#EFEDE8', // ховер на птичку
                neutral20: 'transparent', // дефолтный бордер
                neutral30: 'transparent', // дефолтный ховер бордер
                neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                neutral80: 'rgba(239, 237, 232, 1)',
              },
            })}
          />
        </SelectWrapper>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            value={recommended}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                primary: 'transparent',
                neutral40: '#EFEDE8', // ховер на птичку
                neutral20: 'transparent', // дефолтный бордер
                neutral30: 'transparent', // дефолтный ховер бордер
                neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                neutral80: 'rgba(239, 237, 232, 1)',
              },
            })}
            options={optionsRec}
          />
        </SelectWrapper>
      </li>
    </ProductsFilterList>
  );
};
