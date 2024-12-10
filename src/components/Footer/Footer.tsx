import Image from "next/image";

import { FooterContainer } from "./footer.styles";
export const Footer = () => {
  return (
    <FooterContainer>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="dogs"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados</p>
    </FooterContainer>
  );
};
