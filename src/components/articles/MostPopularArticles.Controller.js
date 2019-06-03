import React, { Component } from 'react';
import NYTService from '../../services/nyt.service'
import MostPopularArticlesView from './MostPopularArticles.View';


class MostPopularArticles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles:[]
        };

    }

    async componentWillMount(){        
        const data = await NYTService.getArticles();
        this.setState({
            articles: data
        });  
    }

    renderItems() {
        
        return this.state && this.state.articles? this.state.articles.map((article) => {
            article.avtar = article.media && 
                            article.media.length > 0 && 
                            article.media[0]['media-metadata'] && 
                            article.media[0]['media-metadata'].length > 0 ?
                            article.media[0]['media-metadata'][0].url : "";
            article.avtar = article.avtar.replace("\/\/", "//");
            article.avtar = article.avtar.replace("\/", "/");
            return article;
        }) : [];
    }

    render() {
        return (
            <MostPopularArticlesView articles={this.renderItems()}/>
        );
    };
}

export default MostPopularArticles;