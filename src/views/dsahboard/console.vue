<template>
  <div class="test-wrapper" style="padding: 15px">
    <div class="header">
      <icon-local-vite style="font-size: 30px" />

      <n-button
        type="primary"
        class="mr-10px"
        @click="
          routerPush({
            path: '/dashboard/detail/1'
          })
        "
      >
        goDetail1
      </n-button>
      <n-button
        type="primary"
        @click="
          routerPush({
            path: '/dashboard/detail/2'
          })
        "
      >
        goDetail2
      </n-button>
    </div>
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
const { routerPush } = useRouterPush()

onMounted(() => {
  console.log('console mount')
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
  // min-height: 100%;
  .header {
    height: 200px;
    // background-color: skyblue;
  }
  .content {
    flex: auto;
  }
}
</style>
