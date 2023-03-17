<template>
  <NDialogProvider>
    <NNotificationProvider>
      <NMessageProvider>
        <slot />
      </NMessageProvider>
    </NNotificationProvider>
  </NDialogProvider>
</template>
