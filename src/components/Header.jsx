"use client";

import {Link as ScrollLink} from 'react-scroll'

const links = [
  {name: 'home', to: 'home'},
  {name: 'about', to: 'about'},
  {name: 'services', to: 'services'},
  {name: 'projects', to: 'projects'},
  {name: 'contact', to: 'contact'},]

const Header = () => {
  return (
    <header className="bg-primary py-4 sticky top-0">
        <div className="container mx-auto">
            <ul className="flex gap-12 text-white">
              {links.map((link, index) => {
                return (<li key={index}>
                    <ScrollLink 
                        to={link.to}
                        smooth
                        spy
                        className="cursor-pointer"
                        activeClass="text-accent" 
                    >
                        {link.name}
                        </ScrollLink>
                </li>);
              })}
            </ul>
        </div>
    </header>
  );
};

export default Header
