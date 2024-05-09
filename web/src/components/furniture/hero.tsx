import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <h1 class="text-5xl font-semibold">Personal Security Checklist</h1>
          <p class="subtitle pb-6">Your guide to securing your digital life and protecting your data privacy</p>
          <a href="https://www.aiappsblocks.dev/">
            <button class="btn btn-primary btn-lg">
              Create your Startup
            </button>
          </a>
        </div>
      </div>
    </div>
  );
});
