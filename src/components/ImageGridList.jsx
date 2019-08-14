import React from 'react'
import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core';


export default function ImageGridList(props) {
    const { projects } = props;
    const maxCols = 6
    return (
        <GridList cellHeight={160} cols={maxCols}>
          {projects.map((tile, index) => (
            <GridListTile key={tile.image} cols={index % maxCols + 1 || 2}>
              <img src={tile.image} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
    );
  }
