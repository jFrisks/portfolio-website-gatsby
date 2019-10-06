import React from 'react'
import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core';

import GeneralImage from '../components/GeneralImage'

const StyledImage = styled(GeneralImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export default function ImageGridList(props) {
    const { projects } = props;
    const maxCols = 8
    return (
        <GridList cellHeight={200} cols={maxCols}>
          {projects.map((tile, index) => (
            <GridListTile key={tile.image} cols={index % maxCols + 1 || 2}>
              <StyledImage imgName={tile.image} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
    );
  }
