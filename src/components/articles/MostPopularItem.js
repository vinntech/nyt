import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import './MostPopuarItem.css';

class MostPopularItem extends Component {

    render() {
        
        return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar yalt="Remy Sharp" src={this.props.article.avtar} />
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.article.title}
                    secondary={
                        <React.Fragment>
                            <Typography component="span">
                            {this.props.article.byline}
                            
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                            <Typography
                                component="span"
                                variant="subtitle2"
                                align="right"
                                color="textPrimary"
                                padding=""
                            >
                             {this.props.article.published_date}   
                            </Typography>
                    <Link to={`/articles/${this.props.article.id}`}>
                        <IconButton edge="end" aria-label="Comments">
                            <ChevronRight />
                        </IconButton>
                    </Link>
                </ListItemSecondaryAction>
            </ListItem>
        );
    };
}

export default MostPopularItem;