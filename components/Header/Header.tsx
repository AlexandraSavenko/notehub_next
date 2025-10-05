import Link from "next/link";
import css from "./Header.module.css";
// import { getCategries } from "@/lib/api";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
const Header = async () => {

  // const categories = await getCategries()
  const categories = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping']
  return (
    <header className={css.header}>
      <h2>NoteHub</h2>
      <nav>
        <ul className={css.navigation}>
          {/* <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li> */}
          <li>{<CategoriesMenu categories={categories}/>}</li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
