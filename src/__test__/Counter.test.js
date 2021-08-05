import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
let getByText;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
  getByText = component.getByText;
});

test('should render header text', () => {
  expect(getByText('My Counter')).toBeTruthy();
});

test('counter initially start with text of 0', () => {
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
});

test('should add button render with +', () => {
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('should substract button render with -', () => {
  const substractBtn = getByTestId('substract-btn');
  expect(substractBtn.textContent).toBe('-');
});

test('change value of input works correctly', () => {
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  expect(inputEl.value).toBe('5');
});

test('click on plus btn adds 1 to counter', () => {
  const addEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');

  fireEvent.click(addEl);

  expect(counterEl.textContent).toBe('1');
});

test('click on plus btn substract 1 to counter', () => {
  const subsEl = getByTestId('substract-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');

  fireEvent.click(subsEl);

  expect(counterEl.textContent).toBe('-1');
});

test('changing input value then clicking on add btn works correctly', () => {
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe('5');
});

test('adding and subtracting leads to the correect counter number', () => {
  const subtractBtnEl = getByTestId('substract-btn');
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });

  expect(counterEl.className).toBe('');

  for (let index = 0; index < 20; index++) {
    fireEvent.click(addBtnEl);
  }

  expect(counterEl.textContent).toBe('200');
  expect(counterEl.className).toBe('green');

  for (let index = 0; index < 30; index++) {
    fireEvent.click(subtractBtnEl);
  }

  expect(counterEl.textContent).toBe('-100');
  expect(counterEl.className).toBe('red');
});
