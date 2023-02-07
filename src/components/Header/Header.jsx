import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNtooGgvjkYF-mTL-5UQlARn1jHnQ9YiEbMqujskVQ6UPPb7hrLn9xYhhxpvdyR8qot0&usqp=CAU"/>
        </header>
    );
};

export default Header;