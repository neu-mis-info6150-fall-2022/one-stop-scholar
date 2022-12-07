import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import Scholarship from "../../components/Scholarship";

function getScholarshipDetails({scholarship}) {

    // const handleApply = () => {
    //     console.log("apply function");
    //     // signIn('',{callbackUrl: 'http://localhost:3000/student'});
    //     Router.push('/scholarships')
    // }

    return (
        <>
           <div>
            {scholarship.scholarshipName}this is name
           </div>
            {/* <Scholarship id={scholarship.id} name={scholarship.name} description={scholarship.description}></Scholarship> */}
            
        </>
    )
}
export default getScholarshipDetails


export async function getStaticPaths() {
  const response = await fetch('http://localhost:8080/scholarships/');
  const data = await response.json();
  const paths = data.map(scholarship => {
      return{
          params : {
              scholarshipId: `${scholarship.id}`
          }
      }
  })

  return {
      paths,
      fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const {params} = context;
  const response = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
  const data = await response.json();

  return {
      props: {
        scholarship: data
      }
  }
}
