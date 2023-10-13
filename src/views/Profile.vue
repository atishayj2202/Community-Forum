<script>
import SignIn from '@/views/profileViews/SignIn.vue'
import ProfileView from '@/views/profileViews/ProfileView.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: { ProfileView, SignIn },
  data() {
    return {
      authCheck: false
    }
  }
}
</script>

<template>
  <ProfileView v-if="authCheck" />
  <SignIn v-else />
</template>

<style scoped></style>
