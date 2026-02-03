const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-0 left-0 -translate-x-3/4 -translate-y-2",
        size: "w-[600px] h-[600px] md:w-[900px] md:h-[900px]",
        colors: [
          { color: "rgba(75, 207, 236, 0.15)", stop: "0%" },
          { color: "rgba(75, 207, 236, 0.08)", stop: "40%" },
          { color: "rgba(75, 207, 236, 0.03)", stop: "70%" },
          { color: "transparent", stop: "100%" },
        ],
        blur: "100px",
        opacity: "0.8",
      },
      {
        position: "bottom-0 right-0 translate-x-2/4 translate-y-3",
        size: "w-[600px] h-[600px] md:w-[900px] md:h-[900px]",
        colors: [
          { color: "rgba(75, 207, 236, 0.15)", stop: "0%" },
          { color: "rgba(75, 207, 236, 0.08)", stop: "40%" },
          { color: "rgba(75, 207, 236, 0.03)", stop: "70%" },
          { color: "transparent", stop: "100%" },
        ],
        blur: "100px",
        opacity: "0.8",
      },
    ],

    contact: [
      {
        position: "top-1/4 left-1/4 -translate-x-1/2",
        size: "w-[500px] h-[500px] md:w-[800px] md:h-[800px]",
        colors: [
          { color: "rgba(75, 207, 236, 0.1)", stop: "0%" },
          { color: "rgba(75, 207, 236, 0.05)", stop: "50%" },
          { color: "transparent", stop: "100%" },
        ],
        blur: "120px",
        opacity: "0.6",
      },
      {
        position: "bottom-1/4 right-1/4 translate-x-1/2",
        size: "w-[600px] h-[600px] md:w-[900px] md:h-[900px]",
        colors: [
          { color: "rgba(75, 207, 236, 0.08)", stop: "0%" },
          { color: "rgba(75, 207, 236, 0.04)", stop: "50%" },
          { color: "transparent", stop: "100%" },
        ],
        blur: "120px",
        opacity: "0.5",
      },
    ],
  };

  const activeGradients = variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(", ");
    return `radial-gradient(circle at center, ${colorStops})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
