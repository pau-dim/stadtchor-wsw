

interface buttonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ onClick, children }: buttonProps) => {
  return (
    <button className="h-12 rounded-lg bg-white font-bold px-5" onClick={onClick}>{children}</button>
  );
};
export default Button;