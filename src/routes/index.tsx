import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Child,
  Parent,
} from "~/components/button-with-context/button-with-context";

export default component$(() => {
  const indexCountSig = useSignal(0);
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>

      <Parent>
        <Child key={indexCountSig.value} onClick$={() => indexCountSig.value++}>
          {indexCountSig.value}
        </Child>
      </Parent>

      <Parent>
        <Child onClick$={() => indexCountSig.value++}>
          {indexCountSig.value}
        </Child>
      </Parent>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
