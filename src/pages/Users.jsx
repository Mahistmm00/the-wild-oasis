import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 1.6rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1.6rem;
  }
`;

function NewUsers() {
  return (
    <SignupLayout>
      <Heading as="h1">Create a account</Heading>
      <SignupForm />
    </SignupLayout>
  );
}

export default NewUsers;
