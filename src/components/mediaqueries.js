import { css } from 'styled-components'
const sizes = {
   xl: 10000,
   lg: 1920,
   md: 1280,
   sm: 700,
   xs: 400,
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})