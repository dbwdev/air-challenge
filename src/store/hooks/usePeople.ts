import { useCallback, useEffect, useState } from 'react';
import getPeople from 'api/getPeople';

export type Person = {
  id: number;
  name: string;
  email: Email;
  avatar: URLString;
  description: string;
};

export default function usePeople() {
  const [peopleList, setPeopleList] = useState<Person[]>([]);
  const [filteredPeopleList, setFilteredPeopleList] = useState<Person[]>([]);

  useEffect(() => {
    // Given this is mocked synchronous code rather than async, I would have
    // checked if the component unmounted before setting state to provent memory
    // leaks.
    const people = getPeople();
    setPeopleList(people);
    setFilteredPeopleList(people);
  }, []);

  const filterPeople = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim()) {
        const filteredPeople = peopleList.filter(({ name }) => {
          return name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return setFilteredPeopleList(filteredPeople);
      }

      return setFilteredPeopleList(peopleList);
    },
    [peopleList]
  );

  return {
    filteredPeopleList,
    filterPeople,
  };
}
