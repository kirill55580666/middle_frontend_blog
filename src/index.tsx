import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// такой импорт работает, так как стоит "moduleResolution": "node"
// index.ts неявно считается "основным" модулем папки
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
