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

export const LoginForm = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [state, formAction] = useActionState(loginAction, {
    ok: false,
    error: "",
    data: null,
  });

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
        <FormInput label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </Form>

      <ForgetPassword href="login/forget-password">
        Perdeu a senha?
      </ForgetPassword>

      <Cadaster>
        <SubTitle>Cadastre-se</SubTitle>
        <p>Ainda não possui cadastro?</p>
        <LinkButton href="login/signup">Cadastre-se</LinkButton>
      </Cadaster>
    </>
  );
};
