import PeopleCard from 'components/PeopleCard';
import PeopleSearch from 'components/PeopleSearch';
import PeopleList from 'components/ui/PeopleList';
import { useContext } from 'react';
import PeopleContext from 'store/contexts/peopleContext';
import styled from 'styled-components';

const StyledPage = styled.main`
  max-width: 575px;
  margin: 0 auto;

  .page-title {
    text-align: left;
    margin-bottom: 3rem;
  }

  .search-container {
    margin: 2.7rem 0;
  }
`;

export default function PeopleFinderPage() {
  const { filteredPeopleList = [] } = useContext(PeopleContext);

  return (
    <StyledPage>
      <div>
        <h1 className='page-title'>The Person Finder</h1>
        <p className='page-description'>
          If you just can’t find someone and need to know what they look like,
          you’ve come to the right place! Just type the name of the person you
          are looking for below into the search box!
        </p>
      </div>
      <div className='search-container'>
        <PeopleSearch />
      </div>
      <PeopleList>
        {filteredPeopleList.map((person) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </PeopleList>
    </StyledPage>
  );
}
