export const ratingsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    scale: [1.5, 2, 1],
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};
