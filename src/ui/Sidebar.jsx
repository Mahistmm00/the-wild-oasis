import styled from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 26rem;
    z-index: 1000;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
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

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <StyledSidebar isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <HiOutlineXMark />
        </CloseButton>
        <Logo />
        <MainNav onClose={onClose} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
