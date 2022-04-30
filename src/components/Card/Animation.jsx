export const cardVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 50,
    },
  },
  hover: {
    // scale: 1.05,
    // transition: {
    //   type: "spring",
    //   duration: 1,
    // },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    y: -300,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      stiffness: 150,
    },
  },
};

export const infoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

export const infoItemsVariants = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const restartIconVariants = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 20,
  },
};
