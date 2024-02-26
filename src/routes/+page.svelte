<script>
  import CarCard from "../components/CarCard.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="relative w-full bg-white">
  <Navbar />
  <div class="bg-[#F6F7F9] pt-20">
    <div
      class=" container flex flex-col items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
    >
      <div class="grid grid-cols-2 gap-5 h-full">
        <div class="relative h-full">
          <div class="absolute top-10 left-10 w-1/2">
            <h1 class="text-3xl font-semibold text-white">
              The Best Platform <br /> for Car Rental
            </h1>
            <p class="text-base font-semibold text-white leading-5 mt-2">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>
          <div class="bg-[#54A6ff] w-fit rounded-xl h-full">
            <img src="/car_img1.png" alt="car" class=" h-full" />
          </div>
        </div>
        <div class="relative h-full">
          <div class="absolute top-10 left-10 w-1/2">
            <h1 class="text-3xl font-semibold text-white">
              Easy way to rent a <br /> car at a low price
            </h1>
            <p class="text-base font-semibold text-white leading-5 mt-2">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
          <div class="bg-[#3563E9] w-fit rounded-xl h-full">
            <img src="/car_img2.png" alt="car" class=" h-full" />
          </div>
        </div>
      </div>

      <div
        class="container grid w-full items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4"
      >
        {#each [0, 1, 2, 3, 4, 5] as slug}
          <CarCard {slug} />
        {/each}
      </div>
    </div>
  </div>
</div>
