<script lang="ts">
  import { cn } from "../lib/utils.ts";
  import { writable } from "svelte/store";
  export let response;
  const showAllContent = writable(false);

  function handleClick() {
    showAllContent.set(true);
    const moreButton = document.querySelector(".more-button");
    if (moreButton) {
      moreButton.classList.add("hidden");
    }
  }
</script>

<div class={cn(["flex", "flex-col", "p-4","h-full", "bg-yellow-50"])}>
  <div class={cn(["p-4", "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "justify-center", "items-center", "content-div"])}>
    {#each response.contents as content, index}
      <div class={cn(["w-full", "h-auto", "p-4", "border", "border-[#ff4f4b]", "flex-shrink-0", index >= 3 && !$showAllContent ? "hidden" : ""])}>
        <h2 class={cn(["text-xl", "font-semibold", "text-gray-800"])}>{content.productTitle}</h2>
        <p class={cn(["text-sm", "text-gray-600", "break-words"])}>{content.productData}</p>
        
        <a href={content.githubUrl} target="_blank" class={cn(["text-teal-500", "hover:underline"])}><img
          src="/images/github-mark.svg"
          alt="Github"
          class={cn([
            "w-12",
            "border-[#ff4f4b]",
            "p-2",
          ])}
        /></a>
        <p class={cn(["text-sm", "text-gray-600", "break-words"])}>{content.productDatail}</p>
        <p class={cn(["text-sm", "text-emerald-300", "break-words"])}>{content.productComposition}</p>
        {#if content.productUrl}
        <a href={content.productUrl} class={cn(["text-teal-500", "hover:underline"])}>DemoSite</a>
        {/if}
      </div>
    {/each}
  </div>
  <div class={cn(["flex", "justify-center", "items-center", "w-full"])}>
    <button on:click={handleClick} class={cn(["mt-4", "px-4", "py-2", "mb-4", "bg-teal-500", "text-white", "rounded", "hover:bg-teal-600", "more-button"])}>
      もっと見る
    </button>
  </div>
</div>

<style>
  .more-button.hidden {
    display: none;
  }
</style>