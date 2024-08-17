<script>
import { cn } from "../lib/utils.ts";

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
}
</script>
    
<div class={cn(["absolute", "top-8", "right-8", "w-svw","h-svw"])}>
    <div class={cn(["flex", "items-start", "justify-end", "gap-8", "sp:gap-2", "sp:w-fit"])}>
        <a href="/" class={cn(["text-amber-50", "text-xl", "hover:text-[#FF4F4B]", "hover:underline"])}>
        top
        </a>
        <a href="/about/" class={cn(["text-amber-50", "text-xl", "hover:text-[#FF4F4B]", "hover:underline"])}>
        about me
        </a>
        <a href="/work/" class={cn(["text-amber-50", "text-xl", "hover:text-[#FF4F4B]", "hover:underline"])}>
        work
        </a>
    </div>
</div>