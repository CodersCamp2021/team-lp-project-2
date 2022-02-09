export const delayLoading = (loadingSetter, dependency) => {
  return setTimeout(() => {
    if (dependency) {
      loadingSetter(false);
    } else delayLoading(loadingSetter, dependency);
  }, 200);
};
