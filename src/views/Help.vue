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
      {
        title: "Lorem ipsum dolor sit amet",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, deleniti aperiam natus eligendi commodi quam pariatur eaque repellat et rerum ex aut nobis voluptatibus illo voluptate beatae exercitationem laboriosam.",
      },
      {
        title: "Quaerat doloremque, deleniti",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, deleniti aperiam natus eligendi commodi quam pariatur eaque repellat et rerum ex aut nobis voluptatibus illo voluptate beatae exercitationem laboriosam. Quaerat doloremque, deleniti, deleniti aperiam natus eligendi commodi quam pariatur eaque repellat et rerum ex aut nobis voluptatibus illo voluptate beatae exercitationem laboriosam.",
      },
    ];

    return { questions };
  },
  components: { AppPage, QuestionItem },
};
</script>

<style></style>
