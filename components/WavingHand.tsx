import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.div
      style={{
        marginBottom: "-20px",
        marginRight: "-45px",
        paddingBottom: "20px",
        paddingRight: "45px",
        display: "inline-block",
      }}
      animate={{ rotate: 20 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        from: 0,
        duration: 0.6,
        ease: "easeInOut",
        type: "tween",
      }}
      className="text-4xl"
    >
      👋
    </motion.div>
  );
};

const Hi = () => <WavingHand />;

export default Hi;
