import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from '../slice/loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123'),
            ),
        ).toEqual({ username: '123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123'),
            ),
        ).toEqual({ password: '123' });
    });
    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };

        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.pending,
            ),
        ).toEqual({ isLoading: true });
    });
});
