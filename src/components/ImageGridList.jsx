import React, { useState } from 'react'
import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core';

import GeneralImage from '../components/GeneralImage'

export default function ImageGridList(props) {
    const { projects } = props;
    const maxCols = 6
    let colWidth = 0;

    function calculateColSize(index) {
      const mod = index % (maxCols / colWidth)
      if(mod === 0){
        if(colWidth >= maxCols / 2) colWidth = 1
        else colWidth += 1
      }
      return colWidth
    }

    return (
        <GridList cellHeight={250} cols={maxCols}>
          {projects.map((tile, index) => {
            const cols = calculateColSize(index);
            return(
              <GridListTile key={tile.image} cols={cols}>
                <GeneralImage imgName={tile.image} alt={tile.title} />
              </GridListTile>
            )
          })}
        </GridList>
    );
  }
