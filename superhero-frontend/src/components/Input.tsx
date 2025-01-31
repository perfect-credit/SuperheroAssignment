interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ 
  touched, 
  error, 
  label,
  helperText,
  className,
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          ${error && touched ? 'border-red-500' : ''}
          ${className || ''}`}
        {...props}
      />
      {touched && error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      {helperText && !error && (
        <div className="text-gray-500 text-sm">{helperText}</div>
      )}
    </div>
  );
};
