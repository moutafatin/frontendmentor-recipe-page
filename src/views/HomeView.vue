<script setup lang="ts">
import OmeletteImage from '@/assets/images/image-omelette.jpeg'
import { recipe } from '@/data'
import ListBullet from '@/components/ListBullet.vue'


</script>

<template>
  <main class="font-outfit max-w-2xl mx-auto bg-white md:p-10 md:rounded-2xl md:my-24">
    <img :src="OmeletteImage" alt="" class="md:rounded-xl">
    <div class="p-10 space-y-6 md:px-0">
      <h1 class="font-young-serif text-dark-charcoal text-4xl">{{ recipe.title }}</h1>
      <p class="text-wenge-brown">{{ recipe.description }}</p>
      <section class="p-6 bg-rose-white rounded-lg">
        <h2 class="text-xl text-primary-raspberry font-semibold mb-2">Preparation time</h2>
        <ul class="space-y-3">
          <li v-for="(v,k) of recipe.time" :key="k" class="text-wenge-brown flex items-center gap-x-4">
            <ListBullet />
            <div>
              <span class="capitalize font-semibold text-dark-charcoal">{{ k }}:</span> {{ v }}
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-3xl font-young-serif text-primary-nutmeg mb-4">Ingredients</h2>
        <ul class="space-y-3">
          <li v-for="(ingredient,index) in recipe.ingredients" :key="index"
              class="flex items-center gap-x-3 text-wenge-brown">

            <ListBullet />
            {{ ingredient }}
          </li>
        </ul>
      </section>
      <hr class="border-light-grey">
      <section>

        <h2 class="text-3xl font-young-serif text-primary-nutmeg mb-4">Instructions</h2>
        <ol class="space-y-3">
          <li v-for="({name,detail},index) in recipe.instructions" :key="index" class="flex items-start gap-x-3">

            <div class="text-primary-raspberry font-semibold">{{ index + 1 }}.</div>
            <div class="text-wenge-brown">
              <span class='font-bold'>{{ name }}:</span> {{ detail }}
            </div>
          </li>
        </ol>
      </section>
      <hr class="border-light-grey">
      <section>

        <h2 class="text-3xl font-young-serif text-primary-nutmeg mb-4">Nutrition</h2>
        <p class="text-wenge-brown mb-2">The table below shows nutritional values per serving without the additional
          fillings.</p>
        <table class="w-full">
          <tr v-for="({name,value}) in recipe.nutrition" :key="name" class="border-b w-full last:border-b-0">
            <td class="p-4 text-wenge-brown">{{ name }}</td>
            <td class="p-4 text-primary-nutmeg font-bold">{{ value }}</td>
          </tr>
        </table>
      </section>
    </div>
  </main>
</template>
