import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    padding: ${({theme}) => theme.spacing(8, 2)};
    position: relative;
`
const Item = styled.div`
    margin: ${({theme}) => theme.spacing(4, 2)};
`

export {
    Section,
    Item
}