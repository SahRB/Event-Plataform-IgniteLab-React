import { Logo } from "./logo";

function Header() {
    return (
        <header className="w-full py-5 flex itens-center justify-center bg-gray-700 border-b border-gray-600">
             <Logo/>
        </header>
     
    );
  }
  
  export default Header;