<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    a {
      text-decoration: none;
    }

    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background: rgba(34, 197, 117, 1);
      border-color: rgba(34, 197, 117, 1);
    }

    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: rgba(102, 102, 102, 1);
    }

    .el-breadcrumb__inner a,
    .el-breadcrumb__inner.is-link {
      color: #22c575;
    }
  }
</style>
