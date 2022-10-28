import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/Header/SearchForm';
import RenderWitchContext from '../RenderWinthContext';

describe('Testa o componente <SearchBar.js />', () => {
  test('Testa se a página tem um imput numérico', () => {
    RenderWitchContext(<SearchForm />);
    const numberImput = screen.getByRole('spinbutton')
    expect(numberImput).toBeInTheDocument();
  });

  test('Testa se o imput numérico tem o texto Filtrar', () => {
    RenderWitchContext(<SearchForm />);
    const text = screen.getByText(/filtrar/i)
    expect(text).toBeInTheDocument();
  });

  test('Testa se a página tem select', () => {
    RenderWitchContext(<SearchForm />);
    const firstSelect = screen.getByTestId('value-filter')
    expect(firstSelect).toBeInTheDocument();
  });

  test('Testa os impus com a opção maior que', () => {
    RenderWitchContext(<SearchForm />);
    const imputValue = screen.getByTestId('value-filter')
    const selectComparison = screen.getByTestId('comparison-filter')
    const selectColumn = screen.getByTestId('column-filter')
    userEvent.selectOptions(selectComparison, ['maior que'])
    userEvent.selectOptions(selectColumn, ['population'])
    userEvent.type(imputValue, '5000');
    const btn = screen.getByTestId('button-filter')
    userEvent.click(btn);
    userEvent.clear(imputValue)
    waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(7))
  });

  test('Testa os impus com a opção menor que', () => {
    RenderWitchContext(<SearchForm />);
    const imputValue = screen.getByTestId('value-filter')
    const selectComparison = screen.getByTestId('comparison-filter')
    const selectColumn = screen.getByTestId('column-filter')
    userEvent.selectOptions(selectComparison, ['menor que'])
    userEvent.selectOptions(selectColumn, ['orbital_period'])
    userEvent.type(imputValue, '1000');
    const btn = screen.getByTestId('button-filter')
    userEvent.click(btn);
    userEvent.clear(imputValue)
    waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(8))
  });

  test('Testa os impus com a opção igual a', () => {
    RenderWitchContext(<SearchForm />);
    const imputValue = screen.getByTestId('value-filter')
    const selectComparison = screen.getByTestId('comparison-filter')
    const selectColumn = screen.getByTestId('column-filter')
    userEvent.selectOptions(selectComparison, ['igual a'])
    userEvent.selectOptions(selectColumn, ['diameter'])
    userEvent.type(imputValue, '10465');
    const btn = screen.getByTestId('button-filter')
    userEvent.click(btn);
    userEvent.clear(imputValue)
    waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(1))
  });

  test('Testa se a página tem um botão', () => {
    RenderWitchContext(<SearchForm />);
    const btn = screen.getByRole('button', {
        name: /filtrar/i
      })
    expect(btn).toBeInTheDocument();
  });

  test('Teste o click do botão', async () => {
    RenderWitchContext(<SearchForm />);
    const btn = screen.getByTestId('button-filter')
    userEvent.click(btn);
  });
});