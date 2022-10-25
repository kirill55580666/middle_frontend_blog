import { useEffect } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { Story } from '@storybook/react';
import { $api } from '../../../api/api';

interface IProps {
    children: any;
    mock: (adapter: MockAdapter) => void;
}

const apiMock = new MockAdapter($api);

const MockedComponent = ({ children, mock }: IProps) => {
    useEffect(() => {
        mock(apiMock);
        return () => {
            apiMock.reset();
        };
    });
    return children;
};

export const AxiosDecorator = (StoryComponent: Story) => {
    const mock = (apiMock: MockAdapter) => {
        apiMock.onGet('/profile').reply(200, {
            data: {
                first: 'Кирилл',
                lastname: 'Рыжиков',
                age: 22,
                currency: 'RUB',
                country: 'Russia',
                city: 'Ufa',
                username: 'admin',
                avatar: 'http://cyril-ryzhikov.ru/static/media/me.069b5d517d47e6360241.jpg',
            },
        });
    };

    return (
        <MockedComponent mock={mock}>
            <StoryComponent />
        </MockedComponent>
    );
};

export default AxiosDecorator;
