import { WaistItem } from '../WaistItem/WaistItem';
import { WaistItemUl } from './WaistList.styled';
// import BasicModalWindow from '../../../BasicModalWindow/BasicModalWindow'
// import {ExersiceModalWindow} from '../../../ExersiceModalWindow/ExersiceModalWindow'
const listProducts = [
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif',
    name: '3/4 sit-up',
    target: 'abs',
    burnedCalories: 220,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif',
    name: '45° side bend',
    target: 'abs',
    burnedCalories: 323,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif',
    name: 'air bike',
    target: 'abs',
    burnedCalories: 312,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif',
    name: 'alternate heel touchers',
    target: 'abs',
    burnedCalories: 116,
    time: 3,
  },
  {
    bodyPart: 'back',
    equipment: 'cable',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif',
    name: 'alternate lateral pulldown',
    target: 'lats',
    burnedCalories: 70,
    time: 3,
  },
  {
    bodyPart: 'chest',
    equipment: 'leverage machine',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif',
    name: 'assisted chest dip (kneeling)',
    target: 'pectorals',
    burnedCalories: 329,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif',
    name: 'assisted hanging knee raise with throw down',
    target: 'abs',
    burnedCalories: 216,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0011.gif',
    name: 'assisted hanging knee raise',
    target: 'abs',
    burnedCalories: 49,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0012.gif',
    name: 'assisted lying leg raise with lateral throw down',
    target: 'abs',
    burnedCalories: 222,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0013.gif',
    name: 'assisted lying leg raise with throw down',
    target: 'abs',
    burnedCalories: 299,
    time: 3,
  },
  {
    bodyPart: 'waist',
    equipment: 'medicine ball',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0014.gif',
    name: 'assisted motion russian twist',
    target: 'abs',
    burnedCalories: 212,
    time: 3,
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0015.gif',
    name: 'assisted parallel close grip pull-up',
    target: 'lats',
    burnedCalories: 61,
    time: 3,
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0016.gif',
    name: 'assisted prone hamstring',
    target: 'hamstrings',
    burnedCalories: 316,
    time: 3,
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0017.gif',
    name: 'assisted pull-up',
    target: 'lats',
    burnedCalories: 329,
    time: 3,
  },
  {
    bodyPart: 'upper arms',
    equipment: 'assisted',
    gifUrl:
      'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0018.gif',
    name: 'assisted standing triceps extension (with towel)',
    target: 'triceps',
    burnedCalories: 104,
    time: 3,
  },
];

export const WaistList = () => {
  return (
    <WaistItemUl>
      {listProducts &&
        listProducts.map(el => <WaistItem key={el.name} data={el} />)}
    </WaistItemUl>
  );
};