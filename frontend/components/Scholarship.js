import styles from '../styles/Home.module.css'

function Scholarship(props) {
        
    return(
        // <ul className={styles.li} id={props.id}>
        //     <li className={styles.taskHeader}><span>Name: </span>{props.name}</li>
        //     <li><span>Description: </span>{props.description}</li>
        //     <li><span>Submission Date: </span>{(props.submissionDate).substr(0,10)}</li>
        //     <li><span>Status: </span>{props.status}</li>
        //     <div>
        //         <button>Complete</button>
        //         <button>Delete</button>
        //     </div>
        // </ul>
        <div>
<span>Description: </span>{props.description}
        </div>
    )
    
}

export default Scholarship;