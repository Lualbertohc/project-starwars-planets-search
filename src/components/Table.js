import { useContext } from 'react';
import context from '../context/context';

function Table() {
  const { planetsState } = useContext(context);

  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>period rotation</th>
            <th>orbital period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { planetsState.map((info) => (
            <tr key={ info.name }>
              <td>{ info.name }</td>
              <td>{ info.rotation_period }</td>
              <td>{ info.orbital_period }</td>
              <td>{ info.diameter }</td>
              <td>{ info.climate }</td>
              <td>{ info.gravity }</td>
              <td>{ info.terrain }</td>
              <td>{ info.surface_water }</td>
              <td>{ info.population }</td>
              <td>{ info.films }</td>
              <td>{ info.created }</td>
              <td>{ info.edited }</td>
              <td>{ info.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
