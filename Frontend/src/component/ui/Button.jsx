import { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../utils/ThemeProvider';

const Button = ({ title, onClick, border, bg = 'white', hover }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        borderColor: border,
        color: theme === 'dark' ? 'black' : 'white',
      }}
      className={`
        btn
        hover:opacity-80
        transition-opacity
      `}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  border: PropTypes.string,
  bg: PropTypes.string,
  hover: PropTypes.string,
};

export default Button;
