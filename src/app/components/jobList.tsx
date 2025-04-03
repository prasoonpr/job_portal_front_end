

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
      <Text size="lg" color="dimmed" style={{ textAlign: "center" }}>
        No jobs available
      </Text>
    )
  }

  return (
    <SimpleGrid cols={{ base: 2, sm: 4, lg: 4 }} spacing="md" style={{ padding: "40px" }}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </SimpleGrid>
  )
}
