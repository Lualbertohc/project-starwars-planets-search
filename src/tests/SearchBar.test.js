import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/Header/SearchBar';
import RenderWitchContext from '../RenderWinthContext';

describe('Testa o componente <SearchBar.js />', () => {
  test('Testa se a página tem um search bar', () => {
    RenderWitchContext(<SearchBar />);
    const searchBar = screen.getByRole('textbox', {
        name: /nome do planeta:/i
      })
    expect(searchBar).toBeInTheDocument();
  });

  test('Testa se o botão do search bar tem o texto Nome do planeta', () => {
    RenderWitchContext(<SearchBar />);
    const text = screen.getByText(/nome do planeta:/i)
    expect(text).toBeInTheDocument();
  });

  test('Testa se o search bar é digitável', () => {
    RenderWitchContext(<SearchBar />);
    const imput = screen.getByRole('textbox', {
        name: /nome do planeta:/i
      })
      userEvent.type(imput, 'Naboo');
    expect(imput).toHaveValue('Naboo');
  });
});