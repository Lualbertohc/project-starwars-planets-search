import { useContext, useState } from 'react';
import context from '../../context/context';

function SearchForm() {
  const [formImput, setFormImput] = useState({
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });

  // CRIAR ESTADOS SEPARADAMENTE
  // const [column, setColumn] = useState({ column: 'population' });
  // const [column, setColumn] = useState({ column: 'population' });
  // const [column, setColumn] = useState({ column: 'population' });

  const [optionsForm, setOptionsForm] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const {
    planetsData,
    setPlanetsData,
    filter,
    setNumericalFilter,
  } = useContext(context);

  const handleChange = ({ target: { name, value } }) => {
    setFormImput((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleBtn = (e) => {
    e.preventDefault();

    switch (formImput.comparison) {
    case 'maior que': {
      const planetFilter = planetsData
        .filter((item) => Number(item[formImput.column]) > Number(formImput.number));
      setPlanetsData(planetFilter);
    }
      break;
    case 'menor que': {
      const planetFilter = planetsData
        .filter((item) => Number(item[formImput.column]) < Number(formImput.number));
      setPlanetsData(planetFilter);
    }
      break;
    case 'igual a': {
      const planetFilter = planetsData
        .filter((item) => Number(item[formImput.column]) === Number(formImput.number));
      setPlanetsData(planetFilter);
    }
      break;
    default:
      setPlanetsData(filter);
    }

    setNumericalFilter((oldState) => [...oldState, formImput]);

    const filterOptionsForm = optionsForm.filter((item) => item !== formImput.column);

    setOptionsForm(filterOptionsForm);
    setFormImput({
      column: filterOptionsForm[0],
    });
  };

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ formImput.column }
          onChange={ handleChange }
        >
          {
            optionsForm
              .map((item, i) => <option key={ i }>{ item }</option>)
          }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ formImput.comparison }
          onChange={ handleChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </form>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
          name="number"
          value={ formImput.number }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleBtn }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SearchForm;
