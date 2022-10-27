import { useContext } from 'react';
import context from '../context/context';

function NumericalFilterList() {
  const { numericalFilter } = useContext(context);

  return (
    <div>
      {
        numericalFilter
          .map((e, i) => <p key={ i }>{ `${e.column} ${e.comparison} ${e.number}` }</p>)
      }
    </div>
  );
}

export default NumericalFilterList;
