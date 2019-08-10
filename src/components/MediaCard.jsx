import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CardMedia, CardActionArea, Card, CardContent, Typography, CardActions } from '@material-ui/core';

export default function MediaCard(props) {
    const { data, buttons, ...other } = props;
    return (
        <Card>
        <CardActionArea>
            <CardMedia
            image={data.image}
            title={data.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {data.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
                {data.tech.join(' ')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {data.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {buttons}
        </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string),
        image: PropTypes.node,
    }),
    buttons: PropTypes.element
}