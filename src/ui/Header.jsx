import styled from "styled-components";
import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1.2rem 2rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
  }
`;

function Header({ onToggleSidebar }) {
  return (
    <StyledHeader>
      <HamburgerButton onClick={onToggleSidebar}>
        <HiOutlineBars3 />
      </HamburgerButton>
      <div style={{ display: 'flex', gap: '2.4rem', alignItems: 'center' }}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </StyledHeader>
  );
}

export default Header;
