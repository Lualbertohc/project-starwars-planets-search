import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';
import context from './context';
import fetchAPI from '../services/fetchApi';

function Provider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [numericalFilter, setNumericalFilter] = useState([]);

  useEffect(() => {
    const fetchFunction = async () => {
      const fetchPlanetList = await fetchAPI();
      const { results } = fetchPlanetList;
      const planetList = results.map((element) => {
        delete element.residents;
        return element;
      });
      setPlanetsData(planetList);
      setFilter(planetList);
    };
    fetchFunction();
  }, []);

  const contextValue = useMemo(
    () => ({
      setPlanetsData,
      setNumericalFilter,
      planetsData,
      filter,
      numericalFilter,
    }),
    [planetsData,
      filter,
      numericalFilter,
    ],
  );

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
