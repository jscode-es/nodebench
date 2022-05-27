import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './compontents/main';

function render() {

    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<Main />);
}

render();