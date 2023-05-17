import Image from "next/image";

import Author from "./author";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

import Spinner from "./Spinner";
import Error from "./Error";
import fetcher from "@/lib/fetcher";
import Link from "next/link";

export default function section1() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="py-6 sm:py-12 dark:text-gray-100">
      <div className=" p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((value, index) => (
            <div key={index}>
              <Slide data={value}></Slide>
            </div>
          ))}
          ...
        </div>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, category, img, published, description, author, subtitle } =
    data;
  return (
    <Link href={`/posts/${id}`}>
      {" "}
      <div class="card">
        <div class="card__header">
          <Image
            src={img || "/"}
            alt="card__image"
            className="flex h-[13rem]"
            width={600}
            height={300}
          />
        </div>
        <div class="card__body">
          <span class="tag tag-blue">{category || "Unknown"}</span>
          <h4>{title || "Unknown"}</h4>
          <p>{subtitle || "subtitle"}</p>
        </div>
        <div class="px-4">{author ? <Author {...author}></Author> : <></>}</div>
      </div>
    </Link>
  );
}

{
  /*  
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
          */
}
