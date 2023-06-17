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
//import { sql } from "@vercel/postgres";
//import { createPool } from '@vercel/postgres';
import ws from 'ws';  // undici also works
import { neonConfig, Pool } from '@neondatabase/serverless';

export default {
  name: "GalleryTemplate",

  async mounted() {


    neonConfig.webSocketConstructor = ws;
    console.log("AAAAAAAAAAA " + process.env.VUE_APP_TEST_VALUE);

    const pool = new Pool({
      connectionString: process.env.VUE_APP_POSTGRES_URL,
    });

    const {rows} = await pool.query`SELECT * from users`;

    console.log(rows);
  }
}

</script>

<style scoped>

</style>
