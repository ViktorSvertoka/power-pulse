export const getDiaryProducts = state => state.diary.products;

export const getDiaryExercises = state => state.diary.exercises;

export const getIsLoadingDiary = state => state.diary.isLoading;

export const getCalories = state => state.diary.consumedCalories;

export const getDoneExercisesTime = state => state.diary.doneExercisesTime;

export const getBurnedCalories = state => state.diary.burnedCalories;

export const getError = state => state.diary.error;

export const getErrorProductsAndExercisesError = state =>
  state.diary.productsAndExercisesError;

export const getAddProductIsLoading = state => state.products.isLoading;

export const getAddProductError = state => state.products.error;
