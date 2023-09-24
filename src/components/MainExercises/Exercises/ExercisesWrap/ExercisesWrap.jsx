import { useState } from 'react';
import { BodyPartList } from '../ExercisesList/BodyPartList';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './ExercisesWrap.styled';
import { MusculesList } from '../ExercisesList/MusculesList';
import { EquipmentList } from '../ExercisesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';

export const ExercisesWrap = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesBox>
      {activeFilter === 'Body parts' && <BodyPartList />}
      {activeFilter === 'Muscules' && <MusculesList />}
      {activeFilter === 'Equipment' && <EquipmentList />}
    </ExercisesWrapper>
  );
};
