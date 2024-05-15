import { FC, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
import { useOutsideAlerter } from "src/hooks";

interface Props {
  className?: string;
}

interface Props {
  className?: string;
  options: string[];
  onSelectionChange: (selectedOption: string) => void;
}

const Dropdown: FC<Props> = ({ className, options, onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
    onSelectionChange(newOption);
  };

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setOpenMenu(false));

  return (
    <div
      className={`input relative flex justify-between items-center cursor-pointer z-20 ${
        className ?? ""
      }`}
      onClick={() => setOpenMenu(!openMenu)}
      ref={ref}
    >
      <div className="flex gap-1.5 items-center h-full text-white/60">
        {selectedOption ?? "Budget Range"}
      </div>
      <ArrowIcon animate={openMenu} />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="absolute top-[44px] w-full left-0 rounded-lg  bg-form-background mt-0 z-50 flex flex-col py-1.5 gap-0"
            {...fastExitAnimation}
          >
            {options.map((option) => (
              <div
                key={option}
                className=" flex gap-1.5 items-center py-3 lg:py-1 px-6 lg:px-2 cursor-pointer transition-200 hover:bg-[#4A4A4A]"
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
