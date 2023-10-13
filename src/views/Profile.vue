<script>
import SignIn from '@/views/profileViews/SignIn.vue'
import ProfileView from '@/views/profileViews/ProfileView.vue'
import {authUser} from "@/handler/authUtils";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: { ProfileView, SignIn },
  data() {
    return {
      authCheck: false
    }
  },
  mounted() {
    const temp = authUser()
    if (temp.status === false){
      this.authCheck = false
    }
    else {
      this.authCheck = true
    }

  }
}
</script>

<template>
  <ProfileView v-if="authCheck" />
  <SignIn v-else />
</template>

<style scoped></style>
