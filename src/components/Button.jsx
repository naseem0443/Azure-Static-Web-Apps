
/**
 * Reusable premium button component.
 * 
 * @param {string} type - Button type (button, submit, reset)
 * @param {string} variant - Visual style (primary, secondary, outline)
 * @param {string} className - Optional additional CSS classes
 * @param {boolean} disabled - Disable state
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button text or inner elements
 * @param {React.ComponentType} icon - Optional Lucide icon component to show on the right
 */
export const Button = ({
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
  children,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon size={16} className="btn-icon" />}
    </button>
  );
};

export default Button;
