import { useContext, React } from 'react'
import './Button.css';
import { AuthContext, } from '../../../contexts/AuthContext'
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

      const { logoutUser  } = useContext(AuthContext)

    const logout = () => logoutUser()

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={logout}
        type={type}
      >
        {children}
      </button>
  );
};
