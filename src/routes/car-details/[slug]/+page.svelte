<script>
  import Navbar from "../../../components/Navbar.svelte";
</script>

<div class="relative w-full bg-white">
  <Navbar />
  <div class="bg-[#F6F7F9] pt-20 min-h-screen">
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
        <div class="relative h-full px-8 py-5">
          <h1 class="text-3xl font-bold">Nissan GT - R</h1>
          <p class="text-base font-medium leading-5 mt-2">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
