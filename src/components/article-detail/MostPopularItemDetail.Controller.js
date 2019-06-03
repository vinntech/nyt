import React, {Component} from 'react';
import NYTService from '../../services/nyt.service'
import './MostPopularItemDetail.css';
import MostPopularItemDetailView from './MostPopularItemDetail.View';

class MostPopularItemDetail extends Component{

    
    constructor(props){

        super(props);

        this.state = {
            expanded : false,
            articleId: props.match.params.id,
            selectedArticle:{
                mediaImage:""
            }
        }

        
    }

    async componentDidMount(){

        const articles = await NYTService.getArticles();
        let selectedArticles = articles.filter((article) => {
            return article.id.toString() === this.state.articleId.toString();
        });
        if(selectedArticles && selectedArticles.length > 0){
            var selectedArticle = selectedArticles[0];
            selectedArticle.avtar = this.getAvtrarThumbnailUrl(selectedArticle, 0);
            selectedArticle.mediaImage = this.getAvtrarThumbnailUrl(selectedArticle, 2);
            this.setState({
                selectedArticle : selectedArticle
            });            
        } 
    }

    getAvtrarThumbnailUrl(article, mediaImageIndex){
        let url =   article.media && 
                article.media.length > 0 && 
                article.media[0]['media-metadata'] && 
                article.media[0]['media-metadata'].length > 0 ?
                article.media[0]['media-metadata'][mediaImageIndex].url : "";

                url = url.replace("\/\/", "//");
                url = url.replace("\/", "/");
                return url;
        
    }

    render(){

        return (
            <MostPopularItemDetailView selectedArticle={this.state.selectedArticle} />
        );

    }

}

export default MostPopularItemDetail;