import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/molecules/CountryCard';

// Mock Next.js Router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '',
  }),
}));

describe('test countrycard', () => {
  it('test render cc', () => {
    const mockData = {
      name: {
        common: 'Indonesia',
        nativeName: { ind: { common: 'Konoha' } },
      },
      cca3: 'IDN',
    };

    render(<Card name={mockData.name} cca3={mockData.cca3} />);

    // Check if country name is rendered
    expect(screen.getByText('Indonesia')).toBeInTheDocument();
    expect(screen.getByText('Konoha')).toBeInTheDocument(); // Native name

    // Check if Link is rendered
    expect(screen.getByRole('link')).toHaveAttribute('href', '/countries/IDN');
  });
});
