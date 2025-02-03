/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '@/pages/register';

jest.mock('@/components/templates/Layout', () => ({ children }) => (
  <div>{children}</div>
));
jest.mock('@/components/organism/Forms/RegisterForm', () => () => (
  <div>Register Form Mocked</div>
));

describe('Register Page', () => {
  it('renders Register page', () => {
    render(<Register />);
    expect(screen.getByText('Register Form Mocked')).toBeInTheDocument();
  });
});
