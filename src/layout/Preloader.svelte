<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import EasePack from "gsap/dist/EasePack";

    onMount(async () => {
            gsap.to('.overlay-preloader-logo', {
                delay: .5,
                x: "0%",
                duration: 1.5,
                ease: "expo.out",
            })
            gsap.to('.overlay-preloader', {
                delay: 3,
                width: 0,
                duration: 1.5,
                ease: "expo.out",
            })
            gsap.to('.overlay-preloader-logo', {
                delay: 2.8,
                x: "-100%",
                duration: 1.5,
                ease: "expo.out",
            })
            gsap.to('.overlay-preloader-el01', {
                delay: 3,
                right: "100%",
                duration: 1.5,
                ease: "expo.out",
            })
    })
</script>

<div class="overlay-preloader">
    <div class="overlay-preloader-text-wrapper">
            <div class="overlay-preloader-logo">
                КОЛЛЕДЖ ЦИФРОВЫХ ТЕХНОЛОГИЙ <br>
                АЙТЫЫН
            </div>
    </div>
    <div class="overlay-preloader-el01"></div>
  </div>
  