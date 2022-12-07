import styles from '../styles/Home.module.css'

function Scholarship(props) {
    
    return (        
        <ul className={styles.schApp} id={props.id}>
            <li><span>Name: </span>{props.name}</li>
            <li><span>Scholarship Sponsor: </span>{props.sponsor}</li>
            <li><span>Description: </span>{props.description}</li>
            <li><span>Application Deadline: </span>{props.deadline}</li>
            <li><span>Amount: </span>{props.amount}</li>
            <li><span>Criteria: </span>{props.criteria}</li>
            <li><span>Applicants: </span>{props.applicants}</li>
        </ul>

    )
}

export default Scholarship;