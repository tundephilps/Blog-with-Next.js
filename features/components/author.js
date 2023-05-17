import Image from "next/image";
import Link from "next/link";

export default function author({ name, img, designation }) {
  //if (!name && !img) return <></>;

  return (
    <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
      <a class="block flex-shrink-0" href="#">
        <Image
          width={200}
          height={200}
          class="h-12 w-12 rounded-full"
          src={img}
          alt="img Description"
        />
      </a>

      <a class="group grow block" href="">
        <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800">
          {name || "No Name"}
        </h5>
        <p class="text-sm text-gray-500">{designation || ""}</p>
      </a>

      <div class="grow">
        <div class="flex justify-end">
          <button
            type="button"
            class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
          >
            <svg
              class="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
