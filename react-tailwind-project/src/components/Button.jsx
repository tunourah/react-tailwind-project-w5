 

const Button = (props) => {
  return (
    <butoon className="border border-white px-7 py-2 tracking-wider uppercase text-xs font-medium  bg-inherit text-white hover:bg-white hover:text-black  ">
        {props.text}
    </butoon>
  )
}

export default Button