import { CadasterForm, ContainerLogin, ImageContainer } from "./login.styles";
export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerLogin>
      <ImageContainer />
      <CadasterForm>{children}</CadasterForm>
    </ContainerLogin>
  );
}
