import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
    children: React.ReactNode;
    delay?: number;
    direction?: "left" | "right" | "up" | "down";
    perspective?: number;
};

const getVariants = (direction: string, delay: number) => {
    let initial: Record<string, number> = { opacity: 0, scale: 0.9 };
    if (direction === "left") initial = { ...initial, x: -window.innerWidth / 8 || -125, rotateY: 0 };
    else if (direction === "right") initial = { ...initial, x: window.innerWidth / 8 || 125, rotateY: 0 };
    else if (direction === "up") initial = { ...initial, y: -80, rotateX: 45 };
    else initial = { ...initial, y: 80, rotateX: -45 };

    return {
        hidden: initial,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: "0 8px 32px 0 rgba(80,0,160,0.15)",
            transition: {
                duration: 3,
                delay,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };
};

const AnimatedSection = ({
    children,
    delay = 0,
    direction = "up",
    perspective = 1200,
}: AnimatedSectionProps) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.section
            ref={ref}
            variants={getVariants(direction, delay)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ perspective }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;