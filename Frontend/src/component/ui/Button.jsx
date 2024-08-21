import { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../utils/ThemeProvider';

const Button = ({ title, onClick, variant }) => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'dark' ? 'text-black' : 'text-white';
  const customText = theme === 'dark' ? 'text-black' : 'text-[#F77B00]';

  const variantClasses = {
    default: `bg-white border border-gray-800 ${textColor} transition-colors hover:bg-gray-100`,
    custom: `bg-[#F77B00] border border-[#F77B00] ${textColor} transition-colors hover:bg-white hover:text-[#F77B00] hover:border-[#F77B00] hover:border-2 transition-colors duration-150 delay-80`,
    secondary: `bg-[#fff] border border-[#F77B00] ${customText}  border-2 transition-colors hover:bg-[#F77B00] hover:${textColor} hover:border-[#F77B00]  transition-colors duration-150 delay-80`,
  };

  const currentClasses = variantClasses[variant] || variantClasses.default;

  return (
    <button onClick={onClick} className={`btn ${currentClasses}`}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['default', 'custom', 'secondary']),
};

export default Button;
