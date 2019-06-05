import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from '../components/appbar/AppHeader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mock from '../data/mock.json';

describe("Snapshot", () => {

  test("Snapshot matches to App Header view", () => {
    const articles = Mock.results;
    const appComponent = renderer.create(<Router><AppHeader  articles={articles}/></Router>);
    const appComponentJson = appComponent.toJSON();
    expect(appComponentJson).toMatchSnapshot();
  });

});