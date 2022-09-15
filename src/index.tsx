import {render} from 'react-dom'
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
// такой импорт работает, так как стоит "moduleResolution": "node", index.ts неявно считается "основным" модулем папки
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)