import glamorous from 'glamorous'
import { keyframes } from 'glamor'

export const StyledApp = glamorous.div({
    textAlign: 'center',
})

const spinLogoAnimation = keyframes({
    '0%': { transform: `rotate(0deg)` },
    '100%': { transform: `rotate(360deg)` },
})

export const StyledLogo = glamorous.img({
    animation: `${spinLogoAnimation} infinite 20s linear`,
    height: '80px',
})

export const StyledHeader = glamorous.div({
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
})

export const StyledIntro = glamorous.p({
    fontSize: 'large',
})
