import * as React from 'react'

import {
    StyledApp,
    StyledHeader,
    StyledIntro,
    StyledLogo,
} from './App.glamorous'

// tslint:disable-next-line no-var-requires
const logo = require('./logo.svg')

class App extends React.Component<{}, {}> {
    render() {
        return (
            <StyledApp>
                <StyledHeader>
                    <StyledLogo
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <h2>Welcome to React</h2>
                </StyledHeader>
                <StyledIntro>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </StyledIntro>
            </StyledApp>
        )
    }
}

export default App
