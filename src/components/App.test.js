// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test("App snapshop match", () => {
  const appComponent = renderer.create(<App />);
  const appComponentJson = appComponent.toJSON();
  expect(appComponentJson).toMatchSnapshot();
});