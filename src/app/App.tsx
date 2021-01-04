import GlobalStyle from 'common/styles/globalStyles';
import Nav from 'components/Nav';
import PeopleFinderPage from 'pages';
import PeopleContext from 'store/contexts/peopleContext';
import usePeople from 'store/hooks/usePeople';

function App() {
  const value = usePeople();

  return (
    <PeopleContext.Provider value={value}>
      <GlobalStyle />
      <Nav />
      <PeopleFinderPage />
    </PeopleContext.Provider>
  );
}

export default App;
