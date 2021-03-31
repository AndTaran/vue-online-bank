import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();

  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const { value: email, errorMessage: eError, handlerBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Введите email")
      .email("Введите корректный email")
  );

  const PASSWORD_MIN_LENGTH = 6;

  const {
    value: password,
    errorMessage: pError,
    handlerBlur: pBlur,
  } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Введите пароль")
      .min(
        PASSWORD_MIN_LENGTH,
        `Пароль не может быть меньше ${PASSWORD_MIN_LENGTH} символов`
      )
  );

  const isToManyAttempts = computed(() => submitCount.value >= 3);

  watch(isToManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 2000);
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch("auth/login", values);
      router.push("/");
    } catch (e) {}
  });

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isToManyAttempts,
  };
}
