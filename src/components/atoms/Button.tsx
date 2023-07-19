import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadCircle } from "@components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

const Button: FC<Props> = (props: Props) => {
  const { children, isLoading = false, className, ...componentProps } = props;
  const styles: string = "w-56 h-10 bg-dark text-white text-sm";

  return (
    <motion.div
      whileTap={{ scale: componentProps.disabled ? 1 : 0.97 }}
      className={`transition-colors duration-200 bg-red-400 p-0.5 rounded ${
        componentProps.disabled
          ? "cursor-not-allowed bg-custom-dark-gray border-custom-dark-gray"
          : ""
      }`}
    >
      <button
        className={`${className} ${styles} transition-colors duration-500 relative flex justify-center items-center rounded text-center text-gray-200 p-2 ${
          componentProps.disabled
            ? "cursor-not-allowed  bg-custom-dark-gray border-custom-dark-gray"
            : "hover:bg-red-400  "
        }`}
        {...componentProps}
        disabled={componentProps.disabled}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadCircle color="#f87171" />
          ) : (
            <span id="button-text">{children}</span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default Button;
