import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { css } from 'glamor'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { baseStyles } from './index.glamor'

css.insert(baseStyles)

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)

registerServiceWorker()
