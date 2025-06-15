type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="text-primary-50 bg-primary-800 border border-primary-700 py-2.5 px-4 label-large cursor-pointer active:scale-95"
      {...rest}
    >
      {children}
    </button>
  );
}
