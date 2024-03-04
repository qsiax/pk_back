<script>
  import { page } from '$app/stores'

  import "../app.scss";
  import Header from "../layout/Header.svelte";
  import AdminHeader from './components/AdminHeader.svelte';
  import Footer from "../layout/Footer.svelte";

  const admin = $page.url.pathname === '/admin';
  const post = $page.url.pathname === '/post/[id]'
  const doc = $page.url.pathname === '/doc'
</script>

{#if admin}
  <AdminHeader />
    <slot />
{:else if post}
  <AdminHeader />
    <slot />
{:else if doc}
  <AdminHeader />
    <slot />
{:else}
  <Header />
    <slot />
  <Footer />
{/if}