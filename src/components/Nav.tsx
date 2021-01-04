import styled from 'styled-components';
import Logo from 'assets/icons/Logo';
import { cyanPeacock4, offwhitePigeon0, white } from 'common/styles/colors';

const StyledNav = styled.nav`
  background: ${white};
  padding: 1rem 8rem;
  border-top: 3.43px solid ${cyanPeacock4};
  box-shadow: 0px -1px 0px 0px ${offwhitePigeon0} inset;
  margin-bottom: 6rem;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Logo />
    </StyledNav>
  );
}
