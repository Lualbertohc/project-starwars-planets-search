import { screen } from '@testing-library/react';
import Table from '../components/Table';
import RenderWitchContext from '../RenderWinthContext';

describe('Teste o componente <SearchBar.js />', () => {
  test('A página deve ter um h1 escrito Table', () => {
    RenderWitchContext(<Table />);
    const h1 = screen.getByRole('heading', {
        name: /table/i
      })
    expect(h1).toBeInTheDocument();
  });

  test('A página deve ter uma tabela', () => {
    RenderWitchContext(<Table />);
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument();
  });
});