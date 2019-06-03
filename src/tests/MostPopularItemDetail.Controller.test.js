import React from 'react';
import renderer from 'react-test-renderer';
import MostPopularItemDetail from '../components/article-detail/MostPopularItemDetail.Controller';
import Mock from '../data/mock.json';
import MostPopularItemDetailView from '../components/article-detail/MostPopularItemDetail.View';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { waitForState, waitForElement  } from 'enzyme-async-helpers'

Enzyme.configure({adapter:new Adapter()});
describe("Snapshot", () => {

  test("Snapshot matches to atricles controller", () => {
    const props = {
        match:{
            params:{
                id:100000006532341
            }
        }
    };
    const appComponent = renderer.create(<MostPopularItemDetail {...props} />);
    const instance = appComponent.getInstance();
    instance.setState({
        expanded : false,
        articleId: 100000006532341,
        selectedArticle:{
            id:100000006532341,
            title:"Test",
            byline:"byline",
            avtar:"/test.jpg",
            mediaImage:"/test.jpg",
            published_date:"12-12-2019",
            abstract:"Test 1111"
        }
    });
    const appComponentJson = appComponent.toJSON();
    
    expect(appComponentJson).toMatchSnapshot();
  });
  

  test("getAvtrarThumbnailUrl(): should not be empty", () => {
    const mockTestData = Mock.results;
    const firstArticle = mockTestData[0];
    var mediaUrl = MostPopularItemDetail.prototype.getAvtrarThumbnailUrl(firstArticle,0);

    expect(mediaUrl).not.toBe("");

    
  });

  test("MostPopularItemDetailView element exists", async () => {
      const selectedArticle ={
        id:100000006532341,
        title:"Test",
        byline:"byline",
        avtar:"/test.jpg",
        mediaImage:"/test.jpg",
        published_date:"12-12-2019",
        abstract:"Test 1111"
    }
    const props = {
        match:{
            params:{
                id:100000006532341
            }
        }
    };
    const wrapper = mount(<MostPopularItemDetail {...props} />);
    await waitForElement(wrapper, MostPopularItemDetailView)
    const elements = wrapper.find(MostPopularItemDetailView);
    expect(elements.length).toBe(1);
    wrapper.unmount();
  });


});
