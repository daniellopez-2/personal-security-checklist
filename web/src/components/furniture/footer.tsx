import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const licenseLink = 'https://indexbug.com';
  const authorLink = 'https://indexbug.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Licensed under <a href={licenseLink} class="link link-primary">MIT</a> -
      © <a href={authorLink} class="link link-primary">IndexBug</a> 2024 </p>
    </aside>
  </footer>
  );
});
