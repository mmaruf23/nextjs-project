// __tests__/Input.test.js
import Input from '@/components/atoms/Input';
import { render, screen, fireEvent } from '@testing-library/react';


test('allows typing in input field', () => {
  render(<Input name="username">Username</Input>);

  // Mendapatkan input berdasarkan nama
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'john_doe' } });

  // Mengecek apakah input memiliki value yang benar
  expect(input.value).toBe('john_doe');
});
