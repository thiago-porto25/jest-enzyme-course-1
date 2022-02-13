import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findTestByAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

describe('testing counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper = undefined;
  });

  test('renders without error', () => {
    const node = findTestByAttribute(wrapper, 'component-app');

    expect(node.length).toBe(1);
  });

  test('renders increment button', () => {
    const button = findTestByAttribute(wrapper, 'component-increment');
    expect(button.length).toBe(1);
  });

  test('renders counter display', () => {
    const counterDisplay = findTestByAttribute(
      wrapper,
      'component-counter-display'
    );
    expect(counterDisplay.length).toBe(1);
  });

  test('counter display starts at 0', () => {
    const counterDisplay = findTestByAttribute(
      wrapper,
      'component-counter-display'
    );

    expect(counterDisplay.text()).toBe('0');
  });

  test('clicking the button increments counter display', () => {
    const button = findTestByAttribute(wrapper, 'component-increment');

    button.simulate('click');

    const counterDisplay = findTestByAttribute(
      wrapper,
      'component-counter-display'
    );

    expect(counterDisplay.text()).toBe('1');
  });
});
