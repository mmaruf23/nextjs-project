import '@testing-library/jest-dom'
import SeachIcons from '@/components/atoms/Icons/SearchIcon';
import { render } from '@testing-library/react';

describe('test search icon', () => { 
  it('renders SeachIcons component', () => {
    const { container } = render(<SeachIcons />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', '24px');
    expect(svgElement).toHaveAttribute('width', '24px');
  });
 })