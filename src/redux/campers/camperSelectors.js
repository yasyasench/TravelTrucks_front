export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.isError;
export const selectCamperWithId = (state) => state.campers.camper;
export const selectPage = (state) => state.campers.currentPage;
export const selectTotal = (state) => state.campers.totalItems;