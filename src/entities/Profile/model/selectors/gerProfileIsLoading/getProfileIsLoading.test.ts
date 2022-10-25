import { StateSchema } from 'app/providers/StoreProvider';
import { gerProfileIsLoading } from './gerProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(gerProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(gerProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
