import "./todolist.css";

export default function Home() {
  return (
    <main>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      <div className="bg-white">
        <img src="./img/bg.png" alt="Background" className="image grad-bg" />

        {/* Content */}
        <div className="relative flex flex-col items-center pt-4 px-4 md:pt-17">
          {/* Title */}
          <div className="flex justify-between items-center w-[325px] max-w-xl text-white mb-8 md:w-[540px]">
            <p className="josefin-tit">TODO</p>
            <button>
              <img src="./img/light.svg" className="hover:cursor-pointer"></img>
            </button>
          </div>

          {/* Input */}
          <input
            type="checkbox text"
            placeholder="Create a new todo..."
            className="josefin-create focus:text-[#000000] w-[327px] md:w-[540px] max-w-xl p-4 rounded-md bg-white shadow-lg mb-4 focus:outline-none"
          />
          {/* Todo Box */}
          <div className="w-[327px] md:w-[540px] max-w-xl bg-white shadow-lg rounded-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              <li className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className="josefin-list2 hover:cursor-pointer">
                    Complete online JavaScript course
                  </span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li className="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className=" josefin-list">Jog around the park 3x</span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] min-sm:hidden hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li className="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div className="flex items-center gap-3 ">
                  <input
                    type="checkbox"
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className="josefin-list ">10 minutes meditation</span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] min-sm:hidden hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li className="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className=" josefin-list">Read for 1 hour</span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] min-sm:hidden hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li className="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className=" josefin-list">Pick up groceries</span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] min-sm:hidden hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li className="flex items-center justify-between p-4 gap-3 hover:bg-gray-50 hover:cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-violet-600 w-5 h-5"
                  />
                  <span className=" josefin-list">
                    Complete Todo App on Frontend Mentor
                  </span>
                </div>
                <button className="text-[#D1D2DA] hover:text-[#000000] min-sm:hidden hover:cursor-pointer">
                  ✕
                </button>
              </li>
              <li></li>
            </ul>

            <div className="josefin-create flex justify-between items-center p-4 gap-4">
              <span>5 items left</span>
              <div className="max-sm:hidden md:flex justify-center gap-4">
                <button className="text-[#3A7CFD] font-semibold">All</button>
                <button className="hover:text-[#000000] font-semibold">
                  Active
                </button>
                <button className="hover:text-[#000000] cursor-pointer font-semibold">
                  Completed
                </button>
              </div>
              <button className="active:text-black cursor-pointer">
                Clear Completed
              </button>
            </div>
          </div>
          <br />
          <div className="min-sm:hidden josefin-bot w-[327px] md:w-[540px] max-w-xl bg-white shadow-lg rounded-md space-x-4 flex items-center justify-center p-4 gap-4">
            <button className="text-[#3A7CFD] font-semibold">All</button>
            <button className="hover:text-[#000000] cursor-pointer font-semibold">
              Active
            </button>
            <button className="hover:text-[#000000] cursor-pointer font-semibold">
              Completed
            </button>
          </div>

          <p className="text-sm josefin3 mt-6">Drag and drop to reorder list</p>
        </div>
      </div>
    </main>
  );
}
