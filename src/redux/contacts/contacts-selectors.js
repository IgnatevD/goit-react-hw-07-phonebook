/** @format */

const visibleContacnsList = (state) => {
  const normalFilter = state?.filters?.toLowerCase();
  const visibleContacns = state?.contacts?.entris?.filter((contact) =>
    contact?.name?.toLowerCase().includes(normalFilter)
  );
  return visibleContacns;
};

const newContactc = (state) => state?.contacts?.entris;

const allSelectors = { visibleContacnsList, newContactc };

export default allSelectors;
