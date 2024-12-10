import { LoginForm } from "./_components";
import { SectionLogin } from "./login.styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Social Sync",
  description: "Entre em sua conta!",
};

export default async function LoginPage() {
  return (
    <SectionLogin className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </SectionLogin>
  );
}
