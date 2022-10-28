import { render } from '@testing-library/react';
import Provider from './context/Provider';

function RenderWitchContext(children) {
  return (
    render(
      <Provider>
        {children}
      </Provider>,
    )
  );
}

export default RenderWitchContext;
