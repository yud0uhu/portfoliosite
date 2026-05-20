<script>
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";

  let loaded = $state(false);

  function handleRef(dotLottie) {
    dotLottie.addEventListener("load", () => {
      loaded = true;
    });
  }
</script>

<div class="animation-wrapper">
  {#if !loaded}
    <div class="skeleton" aria-hidden="true"></div>
  {/if}
  <div class="lottie-container" class:loaded>
    <DotLottieSvelte
      src="/cream-soda.lottie"
      loop
      autoplay
      dotLottieRefCallback={handleRef}
    />
  </div>
</div>

<style>
  .animation-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .skeleton {
    position: absolute;
    width: 280px;
    height: 360px;
    border-radius: 50% 50% 40% 40% / 30% 30% 50% 50%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 25%,
      rgba(255, 255, 255, 0.09) 50%,
      rgba(255, 255, 255, 0.04) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }

  .lottie-container {
    opacity: 0;
    transition: opacity 0.4s ease;
    width: 100%;
    height: 100%;
  }

  .lottie-container.loaded {
    opacity: 1;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
