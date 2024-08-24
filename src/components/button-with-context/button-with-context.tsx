import {
  component$,
  createContextId,
  PropsOf,
  Signal,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";

export const ButtonContextId =
  createContextId<Signal<number>>("button-context");

export const Parent = component$(() => {
  const countSig = useSignal(0);

  useContextProvider(ButtonContextId, countSig);
  return (
    <>
      <Slot />
    </>
  );
});

export const Child = component$<PropsOf<"button">>(({ ...props }) => {
  const countSig = useContext(ButtonContextId);
  console.log("countSig", countSig.value);
  return (
    <button {...props}>
      <Slot />
    </button>
  );
});
