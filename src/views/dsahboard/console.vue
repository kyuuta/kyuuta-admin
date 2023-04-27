<template>
  <div
    class="test-wrapper bg-white dark:bg-black"
    style="padding: 15px"
  >
    <div class="header">header</div>
    <div class="content">
      <n-data-table
        :style="{ height: '100%' }"
        :columns="columns"
        :data="data"
        :bordered="false"
        flexHeight
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mount')
})

const columns = [
  {
    title: 'name',
    key: 'name'
  },
  {
    title: 'age',
    key: 'age'
  }
]

const data = [
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'xuan',
    age: 24
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  },
  {
    name: 'kyuuta',
    age: 23
  }
]
</script>

<style lang="less" scoped>
.test-wrapper {
  display: flex;
  flex-direction: column;
  flex: auto;
  .header {
    height: 200px;
    background-color: skyblue;
  }
  .content {
    flex: auto;
  }
}
</style>
