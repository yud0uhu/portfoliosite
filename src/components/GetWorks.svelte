<script lang="ts">
  import { onMount } from 'svelte';
  import { getList } from '../lib/microcms.ts';
  import type { WorksResponse } from '../lib/microcms.ts';

  let worksResponse: WorksResponse | null = null;

  onMount(async () => {
    try {
      worksResponse = await getList();
      console.log("Received data:", worksResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
</script>

{#if worksResponse}
  <div>
    <h1>Works</h1>
    {#each worksResponse.contents as work}
      <div>
        <h2>{work.productTitle}</h2>
        <p>{work.productData}</p>
        <a href={work.githubUrl}>GitHub</a>
        <p>{work.productDatail}</p>
        <p>{work.productComposition}</p>
        <img src={work.productImage} alt={work.productTitle} />
        <a href={work.productUrl}>Product URL</a>
      </div>
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}