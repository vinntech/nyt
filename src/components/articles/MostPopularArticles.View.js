import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MostPopularItem from './MostPopularItem';

function MostPopularArticlesView(props) {

    function renderItems(articles){
        return articles.map((article) => {
            return (<MostPopularItem key={article.id} article={article} />);
        });
    }

    return(
        <List>
            {renderItems(props.articles)}
            <Divider variant="inset" component="li" />
        </List>
    );

}

export default MostPopularArticlesView;

/* Remote it for coverage report */