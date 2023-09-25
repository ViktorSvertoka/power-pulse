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
import { WaistList } from '../../Waist/WaistList/WaistList';

export const ExercisesWrap = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

  const handleSetExName = name => {
    setExerciseName(name);
  };

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
        {activeFilter !== 'Waist' ? (
          <ExercisesTitle>Exercises</ExercisesTitle>
        ) : (
          <ExercisesTitle>{exerciseName}</ExercisesTitle>
        )}
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesBox>
      {activeFilter === 'Body parts' && (
        <BodyPartList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
      {activeFilter === 'Muscules' && (
        <MusculesList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
      {activeFilter === 'Equipment' && (
        <EquipmentList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
      {activeFilter === 'Waist' && <WaistList exerciseName={exerciseName} />}
    </ExercisesWrapper>
  );
};
