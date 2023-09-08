import { Link } from "react-router-dom";

function Button({ children, to, onClick, type }) {
  const styles = {
    primary:
      "bg-blue-900 py-2.5 px-3 inline-block uppercase rounded-full font-semibold text-stone-100 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 mb-4",
    secondary:
      "bg-blue-900 py-1.5 px-2 inline-block uppercase rounded-full font-semibold text-stone-100 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 mb-4",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
