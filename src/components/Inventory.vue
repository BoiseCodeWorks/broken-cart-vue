<template>
  <div class="container mb-5">
    <h1>Store Inventory</h1>
    <div class="row">
      <div v-for="item in inventory" :key="item.id" class="col-sm-4">
        <item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  setup() {
    return {
      inventory: computed(() => AppState.inventory)
    }
  }
}
</script>
