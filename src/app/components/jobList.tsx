"use client"

import { SimpleGrid, Text } from "@mantine/core"
import JobCard from "./jobCard"
import type { JobType } from "@/app/types/index"

interface JobListProps {
  jobs: JobType[] | undefined
}

export default function JobList({ jobs }: JobListProps) {
  if (!jobs || jobs.length === 0) {
    return (
      <div style={{ backgroundColor: "#f5f5f5", padding: "40px" }}>
        <Text size="lg" color="dimmed" style={{ textAlign: "center" }}>
          No jobs available
        </Text>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#F9F8FC ", padding: "40px" }}>
      <SimpleGrid cols={{ base: 2, sm: 4, lg: 4 }} spacing="md">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </SimpleGrid>
    </div>
  )
}
