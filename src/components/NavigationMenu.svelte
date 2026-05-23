<script>
  import { cn } from "../lib/utils";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class={cn(["absolute", "top-8", "right-8", "w-svw", "h-svw"])}>
  <div
    class={cn([
      "flex",
      "items-start",
      "justify-end",
      "gap-8",
      "sp:gap-2",
      "sp:w-fit",
    ])}
  >
    <a
      href="/"
      class={cn([
        "text-white",
        "text-xl",
        "px-4",
        "py-1",
        "rounded-full",
        "transition-colors",
      ])}
    >
      top
    </a>
    <a
      href="/about/"
      class={cn([
        "text-white",
        "text-xl",
        "px-4",
        "py-1",
        "rounded-full",
        "transition-colors",
      ])}
    >
      about me
    </a>
    <a
      href="/work/"
      class={cn([
        "text-white",
        "text-xl",
        "px-4",
        "py-1",
        "rounded-full",
        "transition-colors",
      ])}
    >
      work
    </a>
  </div>
</div>
