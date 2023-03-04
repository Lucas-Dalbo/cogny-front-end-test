import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const SaleContext = createContext();

function SaleProvider({ children }) {
  const [itens, setItens] = useState([]);

  const values = useMemo(
    () => (
      { itens, setItens, local: 'cogny-shoes-cart' }),
    [itens],
  );

  return (
    <SaleContext.Provider value={ values }>
      {children}
    </SaleContext.Provider>
  );
}

SaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SaleContext, SaleProvider };
