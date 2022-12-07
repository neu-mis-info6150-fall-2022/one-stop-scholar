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
  console.log("data-getStaticPaths",data);
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
  console.log("params-prop",params);

  const response = await fetch(`http://localhost:8080/scholarships/638ea71bca471a808b4be3d6`);
  console.log("response-prop",response);

  const data = await response.json();
  console.log("data-prop",data);
  return {
      props: {
        scholarship: data
      }
  }
}
