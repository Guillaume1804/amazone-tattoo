// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ScrollDownButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1], // ← Divise l’animation en phases égales
      }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.15, ease: "easeInOut" },
      }}
    >
      {/* Halo (inchangé) */}
      <motion.span
        className="absolute w-14 h-14 rounded-full bg-white opacity-30 blur-xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />

      {/* Chevron */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-white w-5 h-5 sm:w-6 sm:h-6 relative"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.button>
  );
}

export default ScrollDownButton;
