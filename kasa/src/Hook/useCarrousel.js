import { useState } from 'react';

export default function useCarrousel(items) {
  const [index, setIndex] = useState(0);

  function goNext() {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex === items.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  function goPrev() {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = items.length - 1;
      }
      return newIndex;
    });
  }

  return { index, goNext, goPrev };
}
