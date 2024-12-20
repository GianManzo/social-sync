import { Metadata } from "next";
import { LoginForm } from "../_components";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta em nossa rede social!",
};
export default async function SignupPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginForm type="signup" />
    </div>
  );
}
