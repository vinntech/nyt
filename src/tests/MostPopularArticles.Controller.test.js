import NYTService from '../services/nyt.service';
import React from 'react';
import MostPopularArticles from '../components/articles/MostPopularArticles.Controller';
import MostPopularArticlesView from '../components/articles/MostPopularArticles.View';
import Mock from '../data/mock.json';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { waitForState, waitForElement  } from 'enzyme-async-helpers'

Enzyme.configure({adapter:new Adapter()});

describe("Snapshot", () => {

  test("Snapshot matches to atricles controller", () => {
    const articles = Mock.results;
    const appComponent = mount(<Router><MostPopularArticles state={articles}/></Router>);
    expect(appComponent).toMatchSnapshot();

  });

  test("Check NTService returning any data", async () => {
    const data = await NYTService.getArticles();
    var length = data.length;
    expect(length).toBeGreaterThanOrEqual(0);
  });

  test("MostPopularArticlesView element exists", async () => {
    const wrapper = mount(<Router><MostPopularArticles /></Router>);
    await waitForElement(wrapper, MostPopularArticlesView)
    const MostPopularArticlesViewElements = wrapper.find(MostPopularArticlesView);
    expect(MostPopularArticlesViewElements.length).toBe(1);
  });

  test("Function:renderItems element exists", async () => {
    const data = await NYTService.getArticles();
    const appComponent = mount(<Router><MostPopularArticles /></Router>);
    appComponent.setState({
      articles:data
    }, () => {
      const renderItems = MostPopularArticles.prototype.renderItems();
      expect(renderItems.length).toBeGreaterThanOrEqual(0);
    });
  });

});

