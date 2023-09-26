import {
  BtnLabel,
  BtnWrapper,
  CardLabel,
  List,
  ListItem,
  ListItemValue,
  Title,
  WaistItemLi,
} from './WaistItem.styled';

const texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};

const capitalizeFirstLeter = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

// {
//   modalData && (
//     <BasicModalWindow isOpenModalToggle={closeModal}>
//
//     </BasicModalWindow>
//   );
// }

export const WaistItem = ({ data, openModalToggle }) => {
  return (
    <WaistItemLi>
      <BtnWrapper>
        <CardLabel>{texts.cardLabel}</CardLabel>
        <BtnLabel
          onClick={() => {
            openModalToggle(data);
          }}
          type="button"
        >
          {texts.btnLabel}
        </BtnLabel>
      </BtnWrapper>
      <Title>{capitalizeFirstLeter(data.name)} </Title>
      <List>
        {Object.keys(texts.list).map(e => (
          <ListItem key={e}>
            {texts.list[e]}
            <ListItemValue>
              {capitalizeFirstLeter(String(data[e]))}
            </ListItemValue>
          </ListItem>
        ))}
      </List>
    </WaistItemLi>
  );
};
