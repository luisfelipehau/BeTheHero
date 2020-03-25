import React from 'react'

function Header(props){
    return (
        <header>            
            <h1>{props.children}</h1>
        </header>
    );
}

//props.children -> <Header> CHILDREN <Header/>
//props.title <Header title="texto"/>

export default Header;