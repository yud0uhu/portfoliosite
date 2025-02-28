<script>
  import { cn } from "../lib/utils";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  export let dailyUIResponse;
  const showAllContent = writable(false);
  import { fade } from "svelte/transition";

  let divs = dailyUIResponse.contents.map(() => null);
  let scrolls = writable(dailyUIResponse.contents.map(() => false));

  function handleClick() {
    showAllContent.set(true);
    const moreButton = document.querySelector(".daily-ui-more-button");
    if (moreButton) {
      moreButton.classList.add("hidden");
    }
  }

  onMount(() => {
    let callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrolls[entry.target.dataset.index] = true;
        }
      });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.1 });

    divs.forEach((div, index) => {
      if (div) {
        div.dataset.index = index;
        observer.observe(div);
      }
    });
  });
</script>

<div
  id="container"
  class={cn(["flex", "flex-col", "p-4", "h-fit", "bg-yellow-50"])}
>
  <div
    class={cn([
      "p-4",
      "grid",
      "grid-cols-1",
      "md:grid-cols-3",
      "gap-4",
      "justify-center",
      "items-center",
      "content-div",
    ])}
  >
    {#each dailyUIResponse.contents as content, index}
      <div
        bind:this={divs[index]}
        transition:fade={{ duration: 300 }}
        class={cn([
          "w-full",
          "p-4",
          "border",
          "border-[#ff4f4b]",
          "flex-shrink-0",
          index >= 3 && !$showAllContent ? "hidden" : "",
        ])}
      >
        {#if scrolls[index]}
          <h2 class={cn(["text-xl", "font-semibold", "text-gray-800"])}>
            {content.title}
          </h2>
          <img
            src={content.image.url}
            width={content.image.width}
            height={content.image.height}
            alt={content.title}
            class={cn(["object-cover", "border-[#ff4f4b]", "p-2"])}
          />
          {#if content.figma}
            <a
              href={content.figma}
              class={cn(["text-teal-500", "hover:underline"])}>Figmaを見る</a
            >
          {/if}
        {/if}
      </div>
    {/each}
  </div>
  <div class={cn(["flex", "justify-center", "items-center", "w-full"])}>
    <button
      on:click={handleClick}
      class={cn([
        "mt-4",
        "px-4",
        "py-2",
        "mb-4",
        "bg-teal-500",
        "text-white",
        "rounded",
        "hover:bg-teal-600",
        "daily-ui-more-button",
      ])}
    >
      もっと見る
    </button>
  </div>
</div>

<style>
  .daily-ui-more-button.hidden {
    display: none;
  }
</style>
