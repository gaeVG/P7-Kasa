import React from 'react';
import '../styles/Tags.css'

const Tags = ({tags}) => {
    return (
        <div>
            <ul className='tag'>
               {tags.map((tag, index) => 
               <li className="tagtexte" key={index}> {tag} </li>
               )}

            </ul>
        </div>
    );
};

export default Tags;