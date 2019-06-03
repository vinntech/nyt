import React from 'react';
import renderer from 'react-test-renderer';
import MostPopularItemDetailView from '../components/article-detail/MostPopularItemDetail.View';

describe("Snapshot", () => {

  test("Snapshot matches to atricles controller", () => {
    const props = {
        selectedArticle:{

            title:"Title",
            byline:"Line",
            avtar:"/avtar.jpg",
            published_date:"12-12-2019",
            mediaImage:"/test.jpg",
            abstract:"more details"
        }
    };
    const appComponent = renderer.create(<MostPopularItemDetailView {...props} />);
    const appComponentJson = appComponent.toJSON();
    expect(appComponentJson).toMatchSnapshot();
  });

});

// describe("Required functions and properties exists" , () => {
//     test("Function:getAvtrarThumbnailUrl exists", () => {
//         expact(MostPopularItemDetail).toHaveProperty("state");
//     });

// });

