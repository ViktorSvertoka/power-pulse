import { useState } from 'react';
import { ExercisesList } from '../ExercisesList/ExercisesList';
import {
  ExercisesFilter,
  ExercisesNavList,
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './ExercisesWrap.styled';

export const ExercisesWrap = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavList>
          <ExercisesFilter
            className={activeFilter === 'Body parts' ? 'active' : ''}
            onClick={() => handleFilterClick('Body parts')}
          >
            Body parts
          </ExercisesFilter>
          <ExercisesFilter
            className={activeFilter === 'Muscules' ? 'active' : ''}
            onClick={() => handleFilterClick('Muscules')}
          >
            Muscules
          </ExercisesFilter>
          <ExercisesFilter
            className={activeFilter === 'Equipment' ? 'active' : ''}
            onClick={() => handleFilterClick('Equipment')}
          >
            Equipment
          </ExercisesFilter>
        </ExercisesNavList>
      </ExercisesBox>
      <ExercisesList />
    </ExercisesWrapper>
  );
};
