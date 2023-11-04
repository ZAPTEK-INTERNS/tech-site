const Button = ({ label, bgcolor }) => {
  return (
    <button
      className={`px-7 py-3 rounded-full border font-semibold text-lg border-purple-700 transition duration-[250ms] ease-in-out ${
        bgcolor === "purple"
          ? "bg-purple-700 text-white hover:bg-white hover:text-purple-700"
          : "bg-white text-deep-purple hover:text-white hover:bg-purple-700"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
