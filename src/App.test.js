import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('testing counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper = undefined;
  });

  test('renders without error', () => {
    const node = wrapper.find('[data-test="component-app"]');

    expect(node.length).toBe(1);
  });

  test('renders increment button', () => {
    const button = wrapper.find('[data-test="component-button"]');
  });

  test('renders counter display', () => {
    const counterDisplay = wrapper.find(
      '[data-test="component-counter-display"]'
    );
  });

  test('counter display starts at 0', () => {
    const counterDisplay = wrapper.find(
      '[data-test="component-counter-display"]'
    );
  });

  test('clicking the button increments counter display', () => {
    const button = wrapper.find('[data-test="component-button"]');
    const counterDisplay = wrapper.find(
      '[data-test="component-counter-display"]'
    );
  });
});
