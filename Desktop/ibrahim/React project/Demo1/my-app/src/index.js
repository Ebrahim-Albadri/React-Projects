import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Componant/app';

import "../node_modules/bootstrap/dist/css/bootstrap.css"


const root = createRoot(document.querySelector("#root"));
root.render(<App/>);