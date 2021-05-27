import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

test('renders pharmacy', () => {
  render(<App />);
  const linkElement = screen.getByText("Pharmacy");
  expect(linkElement).toBeInTheDocument();
});

test('render footer', () => {
  render(<Footer />);
  const text = screen.getByText("Online Pharmacy");
  expect(text).toBeInTheDocument();
});


describe("unauthorized", () => {
  test('header links unauthorized', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>);
    expect(screen.getByText('Pharmacy').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Catalog').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Sign In').closest('a')).toHaveAttribute('href', '/sign-in');
    expect(screen.getByText('Sign Up').closest('a')).toHaveAttribute('href', '/sign-up');
  });
  
  test('render sign in', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getAllByText('Sign In')[0]).toBeInTheDocument();
  })

  test('render sign up', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
    expect(screen.getAllByText('Sign Up')[0]).toBeInTheDocument();
  })
}
)

describe("authorized", () => { 
  beforeAll(() => localStorage.setItem("credentials", "1"));
  afterAll(() => localStorage.removeItem("credentials"));
  test('header links authorized', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>);
    expect(screen.getByText('Pharmacy').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Catalog').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByAltText('shopping_basket').closest('a')).toHaveAttribute('href', '/shopping-basket');
    expect(screen.getByAltText('Profile').closest('a')).toHaveAttribute('href', '/profile');
  });
  }
)


test('renders catalog loading', () => {
  render(<Catalog />);
  const linkElement = screen.getByText("Loading");
  expect(linkElement).toBeInTheDocument();
});
