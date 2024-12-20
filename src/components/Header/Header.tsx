import Image from "next/image";
import {
  HeaderContainer,
  HeaderNav,
  LinkLogin,
  LinkLogo,
} from "./header.styles";

export const Header = () => {
  const user = false;
  return (
    <HeaderContainer>
      <HeaderNav className="container">
        <LinkLogo href="/">
          <Image
            src="/assets/dogs.svg"
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </LinkLogo>
        {user ? (
          <LinkLogin href="/account">Gian</LinkLogin>
        ) : (
          <LinkLogin className="login" href="/login">
            Login / Criar
          </LinkLogin>
        )}
      </HeaderNav>
    </HeaderContainer>
  );
};
