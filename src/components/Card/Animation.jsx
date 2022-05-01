export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: [1.5, 1],
    transition: {
      duration: 1,
      staggerChildren: 0.75,
    },
  },
};

export const cardImageVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const errorVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    scale: 0.8,
    x: 0,
  },
};
