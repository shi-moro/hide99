<template>
  <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
import { createClient } from "@vercel/kv";

export const config = { runtime: 'edge' };
export default {
  name: "GalleryTemplate",

  async mounted() {

    console.log(process.env.VUE_APP_KV_REST_API_TOKEN);

    const users = createClient({
      url: JSON.stringify(process.env.VUE_APP_KV_REST_API_URL),
      token: JSON.stringify(process.env.VUE_APP_KV_REST_API_TOKEN),
    });

    const user = await users.hgetall('user:me');

    console.log(user);
  }
}

</script>

<style scoped>

</style>
