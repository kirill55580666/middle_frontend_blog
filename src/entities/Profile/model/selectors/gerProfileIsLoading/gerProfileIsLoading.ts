import { StateSchema } from 'app/providers/StoreProvider';

export const gerProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
