import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function MostPopularItemDetailView(props){
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar yalt="Remy Sharp" src={props.selectedArticle.avtar} />
                }
                action={
                    <Typography variant="body2" color="textSecondary" component="p">
                    {props.selectedArticle.published_date}
                    </Typography>
                }
                title={props.selectedArticle.title}
                subheader={props.selectedArticle.byline}
            />
            {props.selectedArticle.mediaImage &&
            <CardMedia
                component="img"
                image={props.selectedArticle.mediaImage}
                title={props.selectedArticle.title}
                
            />
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.selectedArticle.abstract}
                </Typography>
                
            </CardContent>
        </Card>);
}
export default MostPopularItemDetailView;

