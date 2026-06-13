"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            (<div>
                {wordsArray.map((word, idx) => {
                    return (
                        (<div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(``, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>)
                    );
                })}
            </div>)
        );
    };

    return (
        (<div className={cn("flex space-x-1", className)}>
            <motion.div
                className="overflow-hidden"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] text-[#FFFEFE] opacity-90"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    // "block rounded-sm w-[4px] mt-1 lg:mt-4 h-8 sm:h-14 xl:h-20 bg-blue-500",
                    cursorClassName
                )}
            >
            </motion.span>
        </div>)
    );
};
