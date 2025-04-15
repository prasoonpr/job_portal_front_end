"use client"

import { Container } from "@mantine/core"
import Header from "@/app/components/header"
import FilterSection from "@/app/components/jobFilter"
import JobList from "@/app/components/jobList"
import type { JobType } from "@/app/types/index"
import { useEffect, useState } from "react"


export default function Home() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // const response = await fetch("http://localhost:3000/jobs", {
          const response = await fetch("https://jobportalserver.prasoonpr.tech/jobs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        console.log(data)
        setJobs(data); // Save fetched jobs to state
        setFilteredJobs(data); // Initially, filtered jobs are the same as all jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilter = async (filters: any) => {
    try {
      console.log("Filters applied:", filters);
  
      // Construct query parameters based on filters
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`https://jobportalserver.prasoonpr.tech/jobs?${queryParams}`, {
        // const response = await fetch(`http://localhost:3000/jobs?${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch filtered jobs");
      }
  
      const data = await response.json();
      console.log("Filtered data:", data);
      setFilteredJobs(data); // Update state with filtered jobs
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
  };
  

  return (
    <main style={{backgroundColor:"#F9F8FC "}}>
      <div style={{backgroundColor:"white",boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)" }}>
      <Header />

        <FilterSection onFilter={handleFilter} />
      </div>
      {/* <Container size="xl"> */}
        <JobList jobs={filteredJobs} />
      {/* </Container> */}
    </main>
  );
}