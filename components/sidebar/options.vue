<template>
  <ul>
    <li>
      <nuxt-link to='/dashboard/profile'>Perfil do Aluno</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/dashboard/financeiro'>Financeiro</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/dashboard/financeiro'>Planejamento</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/dashboard'>voltar</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SidebarOptions'
}
</script>

<style>

</style>