export const getDiaryProducts = state => state.diary.products;

export const getDiaryExercises = state => state.diary.exercises;

export const getIsLoadingDiary = state => state.diary.isLoading;

export const getError = state => state.diary.error;

export const getErrorProductsAndExercisesError = state =>
  state.diary.productsAndExercisesError;
