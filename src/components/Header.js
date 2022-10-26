import { useContext } from 'react';
import context from '../context/context';

function Header() {
  const { imputState,
    setImput,
    planetsData,
    filter,
    setPlanetsData,
  } = useContext(context);

  const handleChange = ({ target: { value } }) => {
    setImput(value);

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
            value={ imputState }
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}

export default Header;
