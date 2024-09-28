const Button = (props) => {
    return (
      <button
        className={`border ${props.bgcolor}  px-7 py-3 tracking-wider uppercase text-xs font-medium bg-inherit  hover:bg-custom-brown hover:text-black ${props.textcolor}`}
      >
        {props.text}
      </button>
    );
  };
  
  export default Button;
  