import { store } from '..';

export * from './branches/auth/interfaces';
export * from './branches/table/interfaces';

export type RootState = ReturnType<typeof store.getState>;
