import React from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import Error from "./Error";
import fetcher from "@/lib/fetcher";
import Link from "next/link";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section class="px-4 py-4 mx-auto max-w-7xl">
      <h2 class="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
        All Articles
      </h2>
      <div class="w-full xl:w-6/6">
        <div class="flex flex-col space-y-16">
          {data.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
        <div class="pt-10 mt-10 border-t border-gray-200">
          <a href="#" class="w-full btn btn-light btn-lg md:w-auto">
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author, subtitle } = data;
  return (
    <Link href={`/posts/${id}`}>
      {" "}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Image
          src={img || "/"}
          class="object-cover w-full h-40 col-span-1 bg-center"
          alt="Kutty"
          loading="lazy"
          width={300}
          height={300}
        />
        <div class="col-span-1 md:col-span-3">
          <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">
            {published || "Unknown"}
          </p>
          <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
            <a href="#" class="text-gray-900 hover:text-purple-700">
              {title || "Title"}
            </a>
          </h2>
          <p class="mb-3 text-sm font-normal text-gray-500">
            {subtitle || "subtitle"}
          </p>
          <a href="#" class="btn btn-light btn-sm">
            Read More
          </a>
        </div>
      </div>
    </Link>
  );
}
