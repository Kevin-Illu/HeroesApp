import { motion } from 'framer-motion'

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const final = {
    show: {opacity: 1, y: 0},
    exit: {
        y: -200,
        opacity: 0
    }
};



export const Loading = ({ setLoading }) => {

    return (
        <motion.div
            variants={final}
            initial="show"
            exit="exit"
            className="loader
                w-screen h-screen bg-white
                p-8
            "
        >
            <motion.h1
                variants={container}
                onAnimationComplete={() => setLoading(false)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="
                loader-inner text-9xl flex items-center justify-center gap-4
                    w-full h-full
                "
            >

                <motion.span
                    className="font-bold"
                    variants={item}>
                    H
                </motion.span>
                <motion.span
                    className="font-bold"
                    variants={item}
                >e</motion.span>
                <motion.span
                    className="font-bold"
                    variants={item}
                >l</motion.span>
                <motion.span
                    className="font-bold"
                    variants={item}
                >l</motion.span>
                <motion.span
                    className="font-bold"
                    variants={item}
                >o</motion.span>

            </motion.h1>
        </motion.div>
    )
}
