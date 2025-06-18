import "./todolist.css";

export default function Home() {
  return (
    <main>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      <div class="bg-white">
        <img src="./img/bg.png" alt="Background" class="image grad-bg" />

        {/* Content */}
        <div class="relative flex flex-col items-center pt-4 px-4 ">
          {/* TITLE */}
          <div class="flex justify-between items-center w-[325px] max-w-xl text-white mb-8 md:w-[540px]">
            <p class="josefin-tit">TODO</p>
            <button>
              <img src="./img/light.svg"></img>
            </button>
          </div>

          {/* Input */}
          <input
            type="checkbox text"
            placeholder="Create a new todo..."
            class="josefin-create focus:text-[#000000] w-[327px] md:w-[540px] max-w-xl p-4 rounded-md bg-white shadow-lg mb-4 focus:outline-none"
          />
          {/* Todo Box */}
          <div class="w-[327px] md:w-[540px] max-w-xl bg-white shadow-lg rounded-md overflow-hidden">
            <ul class="divide-y divide-gray-200">
              <li class="flex items-center justify-between p-4">
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked
                    class="accent-violet-600 w-5 h-5"
                  />
                  <span class="josefin-list2">
                    Complete online JavaScript course
                  </span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li class="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div class="flex items-center gap-3">
                  <input type="checkbox" class="g w-5 h-5" />
                  <span class=" josefin-list">Jog around the park 3x</span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li class="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div class="flex items-center gap-3 ">
                  <input type="checkbox" class="accent-violet-600 w-5 h-5" />
                  <span class="josefin-list ">10 minutes meditation</span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li class="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div class="flex items-center gap-3">
                  <input type="checkbox" class="accent-violet-600 w-5 h-5" />
                  <span class=" josefin-list">Read for 1 hour</span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li class="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div class="flex items-center gap-3">
                  <input type="checkbox" class="accent-violet-600 w-5 h-5" />
                  <span class=" josefin-list">Pick up groceries</span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li class="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div class="flex items-center gap-3">
                  <input type="checkbox" class="accent-violet-600 w-5 h-5" />
                  <span class=" josefin-list">
                    Complete Todo App on Frontend Mentor
                  </span>
                </div>
                <button class="text-[#D1D2DA]">✕</button>
              </li>
              <li></li>
            </ul>

            {/* Filter/Footer */}
            <div class="josefin-create flex justify-between items-center p-4 gap-4">
              <span>5 items left</span>
              <div class="max-sm:hidden md:flex justify-center gap-4">
                <button class="text-[#3A7CFD] font-semibold">All</button>
                <button class="hover:text-[#000000] font-semibold">
                  Active
                </button>
                <button class="hover:text-[#000000] cursor-pointer font-semibold">
                  Completed
                </button>
              </div>
              <button class="active:text-black cursor-pointer">
                Clear Completed
              </button>
            </div>
          </div>
          <br />
          <div class="min-sm:hidden josefin-bot w-[327px] md:w-[540px] max-w-xl bg-white shadow-lg rounded-md space-x-4 flex items-center justify-center p-4 gap-4">
            <button class="text-[#3A7CFD] font-semibold">All</button>
            <button class="hover:text-[#000000] cursor-pointer font-semibold">
              Active
            </button>
            <button class="hover:text-[#000000] cursor-pointer font-semibold">
              Completed
            </button>
          </div>

          <p class="text-sm josefin3 mt-6">Drag and drop to reorder list</p>
        </div>
      </div>
    </main>
  );
}
