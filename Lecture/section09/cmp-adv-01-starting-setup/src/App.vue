<template>
  <div>
    <!-- option1: <the-header></the-header> -->
    <TheHeader />
    <!--will automatically create kebab case tag-->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <table style="width: 100%;">
      <tr>
        <td style="border: 1px solid grey;">
          <course-goals>
            <template #default="slotProps">
              <!--slotProps will be an object witll all defined props on this slot-->
              <h2>{{ slotProps.item }}</h2>
              <p>{{ slotProps.anotherProp }}</p>
              <!--slotProps["another-prop"]-->
            </template>
          </course-goals>
        </td>
        <td>
          <!--You can remove template when the content should go to the default (only) slot-->
          <course-goals #default="slotProps">
            <!--slotProps will be an object witll all defined props on this slot-->
            <h2>{{ slotProps.item }}</h2>
            <p>{{ slotProps.anotherProp }}</p>
            <!--slotProps["another-prop"]-->
          </course-goals>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    // Local component: components will be available onnly in this file
    //option1: "the-header": TheHeader // key: value
    TheHeader, //option2,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>