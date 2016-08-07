import { DB_ACTIONS } from './constants';

export const selectDb = (query) => ({
  type: DB_ACTIONS.SELECT,
  query,
});
