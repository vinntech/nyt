import React from 'react';
import renderer from 'react-test-renderer';
import MostPopularArticlesView from '../components/articles/MostPopularArticles.View';
import MostPopularItem from '../components/articles/MostPopularArticles.View';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mock from '../data/mock.json';

describe("Snapshot", () => {

  test("Snapshot matches to atricles view", () => {
    const articles = Mock.results;
    const appComponent = renderer.create(<Router><MostPopularArticlesView  articles={articles}/></Router>);
    const appComponentJson = appComponent.toJSON();
    expect(appComponentJson).toMatchSnapshot();
  });

});