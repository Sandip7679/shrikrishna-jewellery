import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    outline:
      "border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white focus:ring-amber-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = clsx(baseStyle, variants[variant], sizes[size], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;


// import { motion } from "framer-motion";
// import clsx from "clsx";

// const Button = ({ children, variant = "primary", className = "", ...props }) => {
//   const base =
//     "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
//   const variants = {
//     primary: "bg-yellow-400 text-black hover:bg-yellow-500",
//     outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
//     glass: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20",
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={clsx(base, variants[variant], className)}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// };

// export default Button;

