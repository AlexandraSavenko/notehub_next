'use client'
import { Category } from "@/lib/api";
import { useState } from "react";
import css from './CategoriesMenu.module.css'
import Link from "next/link";
type Props = {
    categories: string[]
}
const CategoriesMenu = ({categories}: Props) => {
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuBtn}>
        Notes
      </button>
      {isOpen && (
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} onClick={toggle}>
              All notes
            </Link>
          </li>
          {categories.map((category, i) => (
            <li key={i} className={css.menuItem}>
              <Link href={`/notes/filter/${category}`} onClick={toggle}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default CategoriesMenu;