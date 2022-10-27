import SearchBar from './SearchBar';
import SearchForm from './SearchForm';
import NumericalFilterList from '../NumericalFilterList';

function Header() {
  return (
    <>
      <SearchBar />
      <SearchForm />
      <NumericalFilterList />
    </>
  );
}

export default Header;
