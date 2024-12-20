"use server";

import { api } from "@/services/api";

import { apiError } from "@/utils/api-error";
import { loginAction } from "./login";

type StateProps = {
  ok: boolean;
  error: string;
  data: null;
};

export const signupAction = async (state: StateProps, formData: FormData) => {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;

  if (!username || !password || !email)
    return { data: null, ok: false, error: "Prencha os campos corretamente!" };

  try {
    const response = await api.post("user", {
      username,
      password,
      email,
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    const data = response?.data;
    const { ok } = await loginAction(
      { ok: true, error: "", data: data },
      formData
    );
    if (!ok) return { data: null, ok: false, error: "Erro ao logar" };
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
};
