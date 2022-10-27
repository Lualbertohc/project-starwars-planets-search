import { useContext, useState } from 'react';
import context from '../../context/context';

function SearchBar() {
  const [searchBarImput, setSearchBarImput] = useState('');

  const { planetsData, setPlanetsData, filter } = useContext(context);

  const handleChange = ({ target: { value } }) => {
    setSearchBarImput(value);

    if (value.length > 0) {
      const search = planetsData
        .filter(({ name }) => name.includes(value));
      setPlanetsData(search);
    } else {
      setPlanetsData(filter);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="input">
          Nome do planeta:
          <input
            data-testid="name-filter"
            id="input"
            type="text"
            value={ searchBarImput }
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
