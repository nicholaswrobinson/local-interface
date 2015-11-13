/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

import { createElement } from 'react'
import { render } from 'react-dom'
import container from './components/container'

document.title = "Piarm Interface";

window.onload = () => {
    render(createElement(container), document.getElementById("app"))
};
