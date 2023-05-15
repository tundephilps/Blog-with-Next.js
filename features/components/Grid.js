import Image from "next/image";
import React from "react";
import golf from "../../pages/Images/golf.webp";

import face from "../../pages/Images/face.jpg";
import { Poll } from "./Poll";

const Grid = () => {
  return (
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-3 row-span-full ">
        <section className="py-6 sm:py-12 dark:text-gray-100">
          <div className=" p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
              <p className="font-serif text-sm dark:text-gray-400">
                Qualisque erroribus usu at, duo te agam soluta mucius.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <div class="card">
                <div class="card__header">
                  <Image
                    src={golf}
                    alt="card__image"
                    className="flex h-[13rem]"
                    width={600}
                    height={300}
                  />
                </div>
                <div class="card__body">
                  <span class="tag tag-blue">Tech</span>
                  <h4>Head of thing in th domain</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div class="px-4">
                  <div class="flex gap-2">
                    <Image src={face} alt="user__image" class="user__image" />
                    <div class="user__info">
                      <h5>Frank Edwards</h5>
                      <small>2h ago</small>
                    </div>
                  </div>
                </div>
              </div>

              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?2"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-pink-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 2, 2020</span>
                    <span>2.2K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?3"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-pink-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 3, 2020</span>
                    <span>2.3K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?4"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-pink-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 4, 2020</span>
                    <span>2.4K views</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section class="px-4 py-4 mx-auto max-w-7xl">
          <h2 class="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
            All Articles
          </h2>
          <div class="w-full xl:w-6/6">
            <div class="flex flex-col space-y-16">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
                <Image
                  src={golf}
                  class="object-cover w-full h-40 col-span-1 bg-center"
                  alt="Kutty"
                  loading="lazy"
                />
                <div class="col-span-1 md:col-span-3">
                  <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">
                    April 16, 2020
                  </p>
                  <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <a href="#" class="text-gray-900 hover:text-purple-700">
                      Process Documents Using Artificial Intelligence For RPA
                      Bots
                    </a>
                  </h2>
                  <p class="mb-3 text-sm font-normal text-gray-500">
                    Earlier RPA bots used to have some limitations like it would
                    take structured data for processing from excel, database, on
                    these data. But with advancements in technology like OCR
                    (Optical Character Recognition) and Machine Learning, RPA
                    bots are capable of extracting these data …
                  </p>
                  <a href="#" class="btn btn-light btn-sm">
                    Read More
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
                <Image
                  src={golf}
                  class="object-cover w-full h-40 col-span-1 bg-center"
                  alt="Kutty"
                  loading="lazy"
                />
                <div class="col-span-1 md:col-span-3">
                  <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">
                    April 16, 2020
                  </p>
                  <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <a href="#" class="text-gray-900 hover:text-purple-700">
                      Implement Dark Mode in Your Android App
                    </a>
                  </h2>
                  <p class="mb-3 text-sm font-normal text-gray-500">
                    Are you curious to implement the Dark Mode in Android
                    Application? Here’s the perfect guideline to attain the Dark
                    Mode in Android Application. Don’t waste your time; just
                    implement and enjoy Dark Mode.
                  </p>
                  <a href="#" class="btn btn-light btn-sm">
                    Read More
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
                <Image
                  src={golf}
                  class="object-cover w-full h-40 col-span-1 bg-center"
                  alt="Kutty"
                  loading="lazy"
                />
                <div class="col-span-1 md:col-span-3">
                  <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">
                    April 16, 2020
                  </p>
                  <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <a href="#" class="text-gray-900 hover:text-purple-700">
                      Why is Mental Health one of the Important Issues to
                      Address?
                    </a>
                  </h2>
                  <p class="mb-3 text-sm font-normal text-gray-500">
                    Mental health was one of the under spoken topics before this
                    lockdown. After sitting at home for about six months I
                    realized that this is one of the important issues to address
                    not only in the work sector but also in daily living.
                  </p>
                  <a href="#" class="btn btn-light btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="pt-10 mt-10 border-t border-gray-200">
              <a href="#" class="w-full btn btn-light btn-lg md:w-auto">
                Load More
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <div className="flex flex-col gap-2 items-center py-20">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Need a help in Claim?
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                class="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
          <div>
            <Poll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
