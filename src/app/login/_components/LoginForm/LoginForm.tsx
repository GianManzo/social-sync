"use client";

import { loginAction } from "@/actions/login";
import { ErrorMessage, FormButton, FormInput } from "@/components";

import useAuthStore from "@/store/auth.store";

import { useActionState, useEffect } from "react";
import {
  Cadaster,
  ForgetPassword,
  Form,
  LinkButton,
  SubTitle,
} from "./login-form.styles";
import { signupAction } from "@/actions/sigunp";

type LoginFormProps = "signup" | "login" | "forget-password" | undefined;

export const LoginForm = ({ type = "login" }: { type: LoginFormProps }) => {
  const isSignup = type === "signup";
  const isLogin = type === "login";
  const isForgetPassword = type === "forget-password";

  const { isAuthenticated, login } = useAuthStore();
  const [state, formAction] = useActionState(
    isSignup ? signupAction : loginAction,
    {
      ok: false,
      error: "",
      data: null,
    }
  );

  useEffect(() => {
    if (state.ok && !isAuthenticated) {
      login();
    }
  }, [state.ok, isAuthenticated, login]);

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/account";
    }
  }, [state.ok]);

  return (
    <>
      <Form action={formAction}>
        <FormInput label="Usuário" name="username" type="text" />
        {isSignup && <FormInput label="Email" name="email" type="email" />}
        <FormInput label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton>{isLogin ? "Entrar" : "Cadastrar"}</FormButton>
      </Form>

      {isLogin && (
        <>
          <ForgetPassword href="login/forget-password">
            Perdeu a senha?
          </ForgetPassword>

          <Cadaster>
            <SubTitle>Cadastre-se</SubTitle>
            <p>Ainda não possui cadastro?</p>
            <LinkButton href="login/signup">Cadastre-se</LinkButton>
          </Cadaster>
        </>
      )}
    </>
  );
};
