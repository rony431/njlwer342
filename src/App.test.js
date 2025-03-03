import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders one ul tag', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('ul').length).toBe(1);
});

it('renders three li tags at the beggining', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('li').length).toBe(3);
});

it('rendered the li with correct text at the beggining', () => {
  const wrapper = shallow(<App />);
  const tasks = ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
  expect(wrapper.find('li').length).toBe(3);
  wrapper.find('li').forEach(function(node, i) {
    expect(node.text()).toBe(tasks[i]);
  });
});

it('creates a new task with the correct text', () => {
  const wrapper = mount(<App />);
  const tasks = ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
  const newTask = wrapper.find('#new-task');
  newTask.simulate('change', { target: { value: 'Hola' }})
  newTask.simulate('keyPress', { key: 'Enter' })
  console.log(wrapper.find('li'))
  if(wrapper.find('li').length  === 4)
    expect(wrapper.find('li').length).toBe(4);
  else {
    newTask.simulate('change', { target: { value: 'Hola' }})
    wrapper.find('form').simulate('submit', newTask)
    expect(wrapper.find('li').length).toBe(4);
  }
  wrapper.find('li').forEach(function(node, i) {
    if(i == 3)
      expect(node.text()).toBe('Hola');
    else
      expect(node.text()).toBe(tasks[i]);
  });
})

it('the text input value is reset after creating task', () => {
  const wrapper = mount(<App />);
  const newTask = wrapper.find('#new-task');
  newTask.getElement.value = 'Hola';
  newTask.simulate('change', { target: { value: 'Hola' }})
  newTask.simulate('keyPress', { key: 'Enter' })
  if(wrapper.find('#new-task').getElement().props.value == '')
    expect(wrapper.find('#new-task').getElement().props.value).toBe('')
  else {
    newTask.simulate('change', { target: { value: 'Hola' }})
    wrapper.find('form').simulate('submit', newTask)
    expect(wrapper.find('#new-task').getElement().props.value).toBe('')
  }
})
