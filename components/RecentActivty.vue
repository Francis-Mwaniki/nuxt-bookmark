<template>
  <div>
    <div class="bg-white py-10">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6">Recent Activity</h2>
        <div class="flex items-center mb-6">
          <svg class="w-6 h-6 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M9.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L11 6.414V15a1 1 0 1 1-2 0V6.414l-4.293 4.293a1 1 0 1 1-1.414-1.414l6-6z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-gray-600">
            {{ activity ? " New bookmark added:" : "Nothing to show" }}
            <a href="#" class="text-blue-600 hover:underline">{{
              store.$state.activity
            }}</a>
            {{ store.$state.activity ? "by" : "" }}
          </p>
        </div>
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm1-7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0V9z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-gray-600" v-if="user">Logged in at {{ formattedDate }}</p>
          <p class="text-gray-600" v-else>Not logged in</p>
        </div>
        <!-- Admin  email-->
        <div class="flex items-center py-1">
          <Icon
            name="ic:outline-admin-panel-settings"
            class="h-6 w-6 mr-2 text-gray-600"
          />
          <p class="text-gray-600" v-if="user">Admin : {{ user.email }}</p>
          <p class="text-gray-600" v-else>Not logged in</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "@/composables/useLogin";
import { useCreateBookMarkStore } from "@/composables/useCreateBookMark";
import moment from "moment";
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const store = useCreateBookMarkStore();
    const activity = computed(() => store.activity);
    let currentUserTime = computed(() => props.user.last_sign_in_at);
    const formattedDate = computed(() => {
      return moment(currentUserTime.value).format("MMMM Do YYYY, h:mm:ss a");
    });
    return { formattedDate, store, activity };
  },
  components: { Icon },
};
</script>

<style scoped></style>
