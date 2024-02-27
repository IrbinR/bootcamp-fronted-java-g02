const Header = ({title}) => {
  return (
    <h1 className="text-4xl text-center mt-4"> 
        {title}
    </h1>
  )
}

export default Header

// const Header = (props) => {
//   return (
//     <h1 className="text-4xl text-center mt-4"> 
//         {props.title}
//     </h1>
//   )
// }