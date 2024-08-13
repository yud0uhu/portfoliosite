<script>
import { cn } from "../lib/utils.ts";

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
}
</script>
    
<button class={cn(["md:hidden", "absolute", "top-2", "right-2", "cursor-pointer"])} on:click={toggleMenu}>
    <div>☰</div>
</button>
    
<div class={cn(["hidden", "md:block", "md:right-0", "right-[861px]", "top-[29px]", "absolute"])}>
<div class={cn(["w-96", "h-8", "justify-start", "items-start", "gap-16", "inline-flex"])}>
    <a href="/" class={cn(["text-amber-50", "text-xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    top
    </a>
    <a href="/" class={cn(["text-amber-50", "text-xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    about me
    </a>
    <!-- <a href="/work/" class={cn(["w-16", "h-8", "text-amber-50", "text-2xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    work
    </a>
    <a href="/feed/" class={cn(["w-28", "h-8", "text-amber-50", "text-2xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    feed
    </a> -->
</div>
</div>

<div class={cn(["absolute", "top-14", "right-2", "w-40", "bg-white", "border", "border-gray-300", "p-2", "rounded", isMenuOpen ? "" : "hidden"])}>
<a href="/about/" class={cn(["text-amber-50", "text-xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    about me
</a>
<a href="/work/" class={cn(["text-amber-50", "text-xl", "font-normal", "font-['Noto Sans']", "hover:text-[#FF4F4B]", "hover:underline"])}>
    🚧work
</a>
</div>