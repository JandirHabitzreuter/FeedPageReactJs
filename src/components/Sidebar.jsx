import style from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';


export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img className={style.cover}
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={style.profile}>
                <img className={style.avatar} 
                     src='https://avatars.githubusercontent.com/u/28264580?v=4'/>

                <strong> Jandir Habitzreuter </strong>   
                <span> Web Develop</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Edit
                </a>    
            </footer>    

        </aside>
    );
}