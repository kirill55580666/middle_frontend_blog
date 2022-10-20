import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// такой импорт работает, так как стоит "moduleResolution": "node"
// index.ts неявно считается "основным" модулем папки
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
