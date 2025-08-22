interface Props {
  children: string;
  color?: string; // Optional prop for button color
  onClick: () => void;
}
function Button({ children, onClick, color }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
