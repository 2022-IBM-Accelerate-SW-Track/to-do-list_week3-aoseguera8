import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});





 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole("textbox",{name: /Add New Item/i});
  const inputDate = screen.getByRole("textbox",{name: /Due Date/i});
  const button = screen.getByRole("button",{name: /Add/i});
  fireEvent.change(inputTask, {target:{value: "Project 3"}});
  fireEvent.change(inputDate, {target:{value: "06/27/2022"}});
  fireEvent.click(button);
  fireEvent.change(inputTask, {target:{value: "Project 3"}});
  fireEvent.change(inputDate, {target:{value: "06/27/2022"}});
  fireEvent.click(button);
  let a = true;
  try{
    const check = screen.getByText(/Project 3/i);
  }
  catch(err){
    a = false;
  }
  expect(a).toBe(true);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputDate = screen.getByRole("textbox",{name:/Due Date/i});
  const button = screen.getByRole("button",{name:/Add/i});
  fireEvent.change(inputDate, {target:{value: "06/27/2022"}});
  fireEvent.click(button);
  let a = true;
  try{
    const checkDate = screen.getByText(new RegExp("06/27/2022", "i"));
  } catch(err){
    a = false;
  }
  expect(a).toBe(false);
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole("textbox", {name: /Add New Item/i});
  const button = screen.getByRole("button", {name: /Add/i});
  fireEvent.change(inputTask, {target: { value: "Project 3"}});
  fireEvent.click(button);
  let a = true;
  try{
    const checkTask = screen.getByText(/Project 3/i);
  } catch(err){
    a = false;
  }
  expect(a).toBe(false);
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole("textbox",{name: /Add New Item/i});
  const inputDate = screen.getByRole("textbox",{name: /Due Date/i});
  const button = screen.getByRole("button",{name: /Add/i});
  fireEvent.change(inputTask, {target:{value: "Project 3"}});
  fireEvent.change(inputDate, {target:{value: "06/27/2022"}});
  fireEvent.click(button);
  const checkBox = screen.getByRole("checkbox")
  fireEvent.click(checkBox);
  let a = true;
  try{
    const checkDelete = screen.getByText(/Project 3/i);
  } catch(err){
    a = false;
  }
  expect(a).toBe(false);
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole("textbox",{name: /Add New Item/i});
  const inputDate = screen.getByRole("textbox",{name: /Due Date/i});
  const button = screen.getByRole("button",{name: /Add/i});
  fireEvent.change(inputTask, {target:{value: "Project 3"}});
  fireEvent.change(inputDate, {target:{value: "06/27/2022"}});
  fireEvent.click(button);
  fireEvent.change(inputTask, {target:{value: "Project 2"}});
  fireEvent.change(inputDate, {target:{value: "06/27/2021"}});
  fireEvent.click(button);
  const colorCheck = screen.getByTestId(/Project 3/i).style.background;
  const colorCheck2 = screen.getByTestId(/Project 2/i).style.background;
  let a = (colorCheck === colorCheck2);
  expect(a).toBe(false);

 });
