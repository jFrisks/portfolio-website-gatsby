import React, { useState } from 'react'
import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core';

import GeneralImage from '../components/GeneralImage'

export default function ImageGridList(props) {
    const { projects } = props;
    const maxCols = 6
    const [colwidth, setColwidth] = useState(1);

    function calculateColSize(index) {
      const mod = index % maxCols
      if(mod === 0) setColwidth(colwidth+1)
      return colwidth
    }

    return (
        <GridList cellHeight={250} cols={maxCols}>
          {projects.map((tile, index) => (
            <GridListTile key={tile.image} cols={1}>
              <GeneralImage imgName={tile.image} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
    );
  }
