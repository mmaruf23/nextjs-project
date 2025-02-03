import Button from '@/components/atoms/Button';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

describe('Button', () => {
  it('render button with the right childred', () => {
    const { getByText } = render(<Button>Login</Button>);

    expect(getByText('Login')).toBeInTheDocument();
  });
  it('render button with the spesicic type', () => {
    const { getByText } = render(<Button typeButton={'button'}>Login</Button>);

    const button = getByText('Login').closest('button');
    expect(button.type).toBe('button');
  });
  it('tets button function when click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Login</Button>);
    const button = getByText('Login').closest('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
  it('test button disabled', () => {
    const { getByText } = render(<Button isDisabled="true">Login</Button>);

    expect(getByText('Login')).toBeInTheDocument();
  })
});
