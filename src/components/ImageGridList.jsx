import React from 'react'
import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core';


export default function ImageGridList(props) {
    const { projects } = props;

    return (
        <GridList cellHeight={160} cols={3}>
          {projects.map(tile => (
            <GridListTile key={tile.image} cols={tile.cols || 1}>
              <img src={tile.image} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
    );
  }
