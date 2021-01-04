import { createContext } from 'react';
import { Person } from 'store/hooks/usePeople';

type ContextState = {
  filteredPeopleList: Person[];
  filterPeople: (searchTerm: string) => void;
};

const PeopleContext = createContext({} as ContextState);

export default PeopleContext;
