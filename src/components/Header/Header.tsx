import Link from "next/link";
import { Container, Nav } from "./header.styles";
import Image from "next/image";

export const Header = () => {
  const user = false;
  return (
    <Container>
      <Nav className="container">
        <Link className="logo" href="/">
          <Image
            src="/assets/dogs.svg"
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className="login" href="/account">
            Gian
          </Link>
        ) : (
          <Link className="login" href="/login">
            Login / Criar
          </Link>
        )}
      </Nav>
    </Container>
  );
};
