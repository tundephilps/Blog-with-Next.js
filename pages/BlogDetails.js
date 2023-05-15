import img from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 ">
          <div class="lg:col-span-2">
            <div class="py-8 lg:pr-4 ">
              <div class="space-y-5 lg:space-y-8">
                <a
                  class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline "
                  href="#"
                >
                  <svg
                    class="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Back to Blog
                </a>

                <h2 class="text-3xl font-bold lg:text-4xl  ">
                  Announcing a free plan for small teams
                </h2>

                <div class="flex items-center gap-x-5">
                  <a
                    class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 "
                    href="#"
                  >
                    Company News
                  </a>
                  <p class="text-xs sm:text-sm text-gray-800 ">
                    January 18, 2023
                  </p>
                </div>

                <p class="text-lg text-gray-800 ">
                  At preline, our mission has always been focused on bringing
                  openness and transparency to the design process. We've always
                  believed that by providing a space where designers can share
                  ongoing work not only empowers them to make better products,
                  it also helps them grow.
                </p>

                <p class="text-lg text-gray-800">
                  We're proud to be a part of creating a more open culture and
                  to continue building a product that supports this vision.
                </p>

                <div class="text-center">
                  <div class="grid lg:grid-cols-2 gap-3">
                    <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure class="relative w-full h-60">
                        <img
                          width={60}
                          height={60}
                          class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="img Description"
                        />
                      </figure>
                      <figure class="relative w-full h-60">
                        <img
                          width={60}
                          height={60}
                          class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="img Description"
                        />
                      </figure>
                    </div>
                    <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        width={60}
                        height={60}
                        class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                        alt="img Description"
                      />
                    </figure>
                  </div>

                  <span class="mt-3 block text-sm text-center text-gray-500">
                    Working process
                  </span>
                </div>

                <p class="text-lg text-gray-800">
                  As we've grown, we've seen how Preline has helped companies
                  such as Spotify, Microsoft, Airbnb, Facebook, and Intercom
                  bring their designers closer together to create amazing
                  things. We've also learned that when the culture of sharing is
                  brought in earlier, the better teams adapt and communicate
                  with one another.
                </p>

                <p class="text-lg text-gray-800">
                  That's why we are excited to share that we now have a{" "}
                  <a
                    class="text-blue-600 decoration-2 hover:underline font-medium"
                    href="#"
                  >
                    free version of Preline
                  </a>
                  , which will allow individual designers, startups and other
                  small teams a chance to create a culture of openness early on.
                </p>

                <blockquote class="text-center p-4 sm:px-7">
                  <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal ">
                    To say that switching to Preline has been life-changing is
                    an understatement. My business has tripled and I got my life
                    back.
                  </p>
                  <p class="mt-5 text-gray-800 ">Nicole Grazioso</p>
                </blockquote>

                <figure>
                  <img
                    width={60}
                    height={60}
                    class="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="img Description"
                  />
                  <figcaption class="mt-3 text-sm text-center text-gray-500">
                    A man and a woman looking at a cell phone.
                  </figcaption>
                </figure>

                <div class="space-y-3">
                  <h3 class="text-2xl font-semibold">
                    Bringing the culture of sharing to everyone
                  </h3>

                  <p class="text-lg text-gray-800">
                    We know the power of sharing is real, and we want to create
                    an opportunity for everyone to try Preline and explore how
                    transformative open communication can be. Now you can have a
                    team of one or two designers and unlimited spectators (think
                    PMs, management, marketing, etc.) share work and explore the
                    design process earlier.
                  </p>
                </div>

                <ul class="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800">
                  <li class="pl-2">
                    Preline allows us to collaborate in real time and is a
                    really great way for leadership on the team to stay
                    up-to-date with what everybody is working on,"{" "}
                    <a
                      class="text-blue-600 decoration-2 hover:underline font-medium"
                      href="#"
                    >
                      said
                    </a>{" "}
                    Stewart Scott-Curran, Intercom's Director of Brand Design.
                  </li>
                  <li class="pl-2">
                    Preline opened a new way of sharing. It's a persistent way
                    for everyone to see and absorb each other's work," said
                    David Scott, Creative Director at{" "}
                    <a
                      class="text-blue-600 decoration-2 hover:underline font-medium"
                      href="#"
                    >
                      Eventbrite
                    </a>
                    .
                  </li>
                </ul>

                <p class="text-lg text-gray-800">
                  Small teams and individual designers need a space where they
                  can watch the design process unfold, both for themselves and
                  for the people they work with – no matter if it's a fellow
                  designer, product manager, developer or client. Preline allows
                  you to invite more people into the process, creating a central
                  place for conversation around design. As those teams grow,
                  transparency and collaboration becomes integrated in how they
                  communicate and work together.
                </p>

                <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  <div>
                    <a
                      class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 "
                      href="#"
                    >
                      Plan
                    </a>
                    <a
                      class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Web development
                    </a>
                    <a
                      class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Free
                    </a>
                    <a
                      class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Team
                    </a>
                  </div>

                  <div class="flex justify-end items-center gap-x-1.5">
                    <div class="hs-tooltip inline-block">
                      <button
                        type="button"
                        class="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm"
                      >
                        <svg
                          class="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        875
                        <span
                          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm"
                          role="tooltip"
                        >
                          Like
                        </span>
                      </button>
                    </div>
                    <div class="hs-tooltip inline-block">
                      <button
                        type="button"
                        class="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm"
                      >
                        <svg
                          class="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                        16
                        <span
                          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm"
                          role="tooltip"
                        >
                          Comment
                        </span>
                      </button>
                    </div>
                    <div class="block h-3 border-r border-gray-300 mx-1.5"></div>

                    <div class="hs-dropdown relative inline-flex">
                      <button
                        type="button"
                        id="blog-article-share-dropdown"
                        class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm"
                      >
                        <svg
                          class="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                          />
                        </svg>
                        Share
                      </button>
                      <div
                        class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-white shadow-2xl rounded-xl p-2"
                        aria-labelledby="blog-article-share-dropdown"
                      >
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          href="#"
                        >
                          <svg
                            class="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                          </svg>
                          Copy link
                        </a>
                        <div class="border-t border-gray-200 my-2 dark:border-gray-700"></div>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          href="#"
                        >
                          <svg
                            class="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          Share on Twitter
                        </a>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          href="#"
                        >
                          <svg
                            class="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          Share on Facebook
                        </a>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          href="#"
                        >
                          <svg
                            class="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                          Share on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
            <div class="sticky top-0 left-0 py-8 lg:pl-4">
              <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
                <a class="block flex-shrink-0" href="#">
                  <img
                    width={10}
                    height={10}
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="img Description"
                  />
                </a>

                <a class="group grow block" href="">
                  <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800">
                    Leyla Ludic
                  </h5>
                  <p class="text-sm text-gray-500">UI/UX enthusiast</p>
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

              <div class="space-y-6">
                <a class="group flex items-center gap-x-6" href="#">
                  <div class="grow">
                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 ">
                      5 Reasons to Not start a UX Designer Career in 2022/2023
                    </span>
                  </div>

                  <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      width={20}
                      height={20}
                      class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="img Description"
                    />
                  </div>
                </a>
                <a class="group flex items-center gap-x-6" href="#">
                  <div class="grow">
                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>

                  <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      width={20}
                      height={20}
                      class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="img Description"
                    />
                  </div>
                </a>
                <a class="group flex items-center gap-x-6" href="#">
                  <div class="grow">
                    <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      7 Principles of Icon Design
                    </span>
                  </div>

                  <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      width={20}
                      height={20}
                      class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="img Description"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
