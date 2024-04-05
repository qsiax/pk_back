<script>
  import { page } from '$app/stores'

  import "../app.scss";
  import Header from "../layout/Header.svelte";
  import AdminHeader from './components/AdminHeader.svelte';
  import Footer from "../layout/Footer.svelte";

  const post = $page.url.pathname === '/post/[id]'
  const news = $page.url.pathname === '/admin/news';
  const document = $page.url.pathname === '/admin/document'
  const raspisaniye = $page.url.pathname === '/admin/raspisaniye'
  const obucheniye = $page.url.pathname === '/admin/obucheniye'
  const kursy = $page.url.pathname === '/admin/kursy'
</script>

{#if news}
  <AdminHeader />
    <slot />
{:else if document}
  <AdminHeader />
    <slot />
{:else if raspisaniye}
  <AdminHeader />
    <slot />
{:else if obucheniye}
  <AdminHeader />
    <slot />
{:else if post}
  <AdminHeader />
    <slot />
{:else if kursy}
  <AdminHeader />
    <slot />
{:else}
  <Header />
    <slot />
  <Footer />
{/if}