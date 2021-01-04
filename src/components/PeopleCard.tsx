import { blackPigeon7, gray, grayPigeon5 } from 'common/styles/colors';
import { Person } from 'store/hooks/usePeople';
import styled from 'styled-components';

interface Props {
  person: Person;
}

const StyledCard = styled.li`
  display: grid;
  grid-template-columns: auto 4fr;
  grid-column-gap: 1.5rem;

  .card-image {
    width: 96px;
    height: 96px;
    background: ${gray};
    border-radius: 2;
  }

  .card-name {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .card-details {
    display: flex;
    flex-direction: column;
  }

  .card-description {
    font-size: 0.88rem;
    color: ${grayPigeon5};
  }
`;

export default function PeopleCard({ person }: Props) {
  const { name, description, avatar } = person;

  return (
    <StyledCard>
      <img className='card-image' alt={`${name}-avatar`} src={avatar} />
      <div className='card-details'>
        <h2 className='card-name'>{name}</h2>
        {/* Given more time, I would implement cross-browser text truncate in case of text overflow */}
        <p className='card-description'>{description}</p>
      </div>
    </StyledCard>
  );
}
