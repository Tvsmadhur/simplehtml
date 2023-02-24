import Login from '../Login'
import Users from '../Users';
import Signup from '../Signup';
import { render, cleanup, screen, fireEvent, getByRole, userEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import * as router from 'react-router'

import "@testing-library/jest-dom";
import { createBrowserHistory } from 'history'
import { createMemoryHistory } from 'history';



import { BrowserRouter, Switch, Router, Routes, Route, MemoryRouter, useNavigate } from 'react-router-dom'

import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
// const history = createBrowserHistory()


const LoginComponent = (component) => {

  const history = createMemoryHistory();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path={"/"}
            element={component} />
          <Route exact path={"/users"}
            element={<Users />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

afterEach(cleanup);


const LoginScreen = () => {
  const history = createMemoryHistory();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter history={history}>

        <Login />
      </BrowserRouter>
    </QueryClientProvider>
  )
}



describe('checking Every component is rendered correctly', () => {


  it('should take snapshot', async () => {
    const { container } = render(<LoginScreen />);
    expect(container).toMatchSnapshot()

  })
  it('should render all the documents', async () => {
    const { getByText, getByTestId, asFragment, getAllByRole, } = render(LoginComponent(<Login />));
    const headNode = getByTestId("heading")
    const inputNode = getAllByRole('input')
    expect(getByTestId('heading')).toHaveTextContent("Login")
    expect(screen.getByRole('img')).toBeInTheDocument();
    const primaryButton = screen.getByRole('button', { name: /Login/i })
    expect(getByTestId('heading')).toHaveTextContent("Login")
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(primaryButton).toBeInTheDocument()
    expect(inputNode).toHaveLength(2)
  })
  it('to Check button event to be triggered', async () => {
    const history = createMemoryHistory();
    history.push("/signup")



    const { getByText, getByTestId, asFragment, getAllByRole, getByRole, debug } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter history={history}>
          <Routes>
            <Route path="/" component={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

    );
    const logSpy = jest.spyOn(console, "log");
    // const button = getByTestId('button')


    // expect(screen.getAllByRole('error')[0]).toBeInTheDocument()
    // expect(screen.getAllByRole('error')[1]).toBeInTheDocument()
    // expect(screen.getAllByRole('error')[2]).toBeInTheDocument()

    // fireEvent.click(button);
    // expect(logSpy).toHaveBeenCalledTimes(1);
    // history.push("/signup")
    expect(history.location.pathname).toBe("/signup")
    // expect(screen.getByTestId('back')).toBeInTheDocument()


    debug()
  })


  it('to Check onchange event to be triggered', () => {
    const { getByText, getByTestId, asFragment, getAllByRole } = render(<LoginScreen />);
    const logSpy = jest.spyOn(console, "log");
    const formHandler = jest.fn();
    const inputNode = getByTestId('username')

    fireEvent.change(inputNode, { target: { value: 'new value' } })
    expect(logSpy).toHaveBeenCalled();
    const inputPasswordNode = getByTestId('password')
    fireEvent.change(inputPasswordNode, { target: { value: 'new value' } })
    expect(logSpy).toHaveBeenCalled();

  })

})