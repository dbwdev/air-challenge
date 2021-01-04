import { offwhitePigeon0, softBlack } from 'common/styles/colors';
import { ChangeEvent, useContext } from 'react';
import PeopleContext from 'store/contexts/peopleContext';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: ${offwhitePigeon0};
  border: none;
  border-radius: 4px;
  padding: 0 1rem;

  ::placeholder {
    font-size: 0.88rem;
    color: ${softBlack};
  }
`;

export default function PeopleSearch() {
  const { filterPeople } = useContext(PeopleContext);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterPeople(e.target.value);
  };

  return (
    <StyledInput
      type='text'
      name='Search People'
      aria-label='Search People'
      placeholder='Type a name...'
      onChange={handleSearchChange}
    />
  );
}
