<script>
  export let slug
  console.log(slug)
</script>



<a href={`/car-details/${slug}`} class="rounded-md border">
    <img
      src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Laptop"
      class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div class="p-4">
      <h1 class="inline-flex items-center text-lg font-semibold">
        Nike Airmax v2
      </h1>
      <p class="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, debitis?
      </p>
      <div class="mt-4">
        <span
          class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
        >
          #Sneakers
        </span>
        <span
          class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
        >
          #Nike
        </span>
        <span
          class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
        >
          #Airmax
        </span>
      </div>
      <div class="mt-3 flex items-center space-x-2">
        <span class="block text-sm font-semibold">Colors : </span>
        <span
          class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"
        ></span>
        <span
          class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"
        ></span>
        <span
          class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"
        ></span>
      </div>
      <div class="mt-5 flex items-center space-x-2">
        <span class="block text-sm font-semibold">Size : </span>
        <span
          class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
        >
          8 UK
        </span>
        <span
          class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
        >
          9 UK
        </span>
        <span
          class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
        >
          10 UK
        </span>
      </div>
      <div class="grid grid-cols-2 items-center mt-4">
        <div>
          <h1 class="text-xl font-bold text-[#1A202C]">
            $99.00/ <span class="text-base text-[#90A3BF]">day</span>
          </h1>
        </div>
        <button
          type="button"
          class="ml-8 rounded-md bg-[#3563E9] py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3563E9]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Rent Now
        </button>
      </div>
    </div>
  </a>