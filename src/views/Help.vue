<template>
  <app-page back title="Ответы на вопросы">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage";
import QuestionItem from "../components/question/QuestionItem";

export default {
  setup() {
    const questions = [
      { title: "Как создать заявку", text: "Очень просто))" },
      { title: "Как удалить заявку", text: "Очень сложно))" },
    ];

    return { questions };
  },
  components: { AppPage, QuestionItem },
};
</script>

<style></style>
