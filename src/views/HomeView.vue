<script setup lang="ts">
import OmeletteImage from '@/assets/images/image-omelette.jpeg'
import { recipe } from '@/data'


</script>

<template>
  <main>
    <img :src="OmeletteImage" alt="">
    <h1>{{ recipe.title }}</h1>
    <p>{{ recipe.description }}</p>
    <section>
      <h2>Preparation time</h2>
      <ul>
        <li v-for="(v,k) of recipe.time" :key="k">
          <span class="capitalize">{{ k }}:</span> {{ v }}
        </li>
      </ul>
    </section>
    <section>
      <h2>Ingredients</h2>
      <ul>
        <li v-for="(ingredient,index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
    </section>
    <section>
      <h2>Instructions</h2>
      <ol>
        <li v-for="({name,detail},index) in recipe.instructions" :key="index">
          <span>{{ name }}:</span> {{ detail }}
        </li>
      </ol>
    </section>
    <section>
      <h2>Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      <table>
        <tr v-for="({name,value}) in recipe.nutrition" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </section>
  </main>
</template>
