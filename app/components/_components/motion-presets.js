// One entrance vocabulary for the whole page. Sections import these instead of
// writing their own timings, so every block arrives with the same rhythm —
// that consistency is what reads as considered rather than decorated.

// Expo-out: quick to start, long soft settle.
export const EASE = [0.22, 1, 0.36, 1];

// Standard entrance. `custom` is the item's place in a cascade, so a heading
// block's parts arrive one after another rather than all at once.
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: EASE },
  }),
};

// For panels that should feel like they slide into place from the side.
export const fadeIn = (from = "left") => ({
  hidden: { opacity: 0, x: from === "left" ? -28 : 28 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE },
  }),
});

// Fires once, slightly before the block is fully on screen.
export const viewportOnce = { once: true, margin: "-60px" };

// Convenience spread: <motion.div {...enter(2)} className="...">
export const enter = (i = 0) => ({
  variants: fadeUp,
  initial: "hidden",
  whileInView: "show",
  viewport: viewportOnce,
  custom: i,
});
