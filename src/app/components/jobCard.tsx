

"use client"
import { formatDistanceToNow } from 'date-fns'
import { Card, Image, Text, Badge, Button, Group, Stack, List } from "@mantine/core"
import type { JobType } from "@/app/types/index"

interface JobCardProps {
  job: JobType
}
// Function to limit text length and add ellipsis if needed
const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Section p="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Image src={`http://localhost:3000${job.companyLogo}`} alt={job.companyName} width={60} height={60} radius="md" />
          <Badge color="blue" variant="light">
            {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
          </Badge>
        </Group>
      </Card.Section>

      <Stack style={{ flex: 1, justifyContent: 'space-between' }}>
        <div style={{ flexGrow: 1 }}>
          <Text fw={700} size="lg" style={{marginBottom:"10px"}}>
            {job.jobTitle}
          </Text>

          <Group style={{ flexWrap: "nowrap", gap: "5px" ,marginBottom:"10px" }}>
            <Badge variant="outline" color="gray" style={{ whiteSpace: "nowrap" }}>
              {job.experience} EXP
            </Badge>
            <Badge variant="outline" color="gray" style={{ whiteSpace: "nowrap" }}>
              {job.workLocation}
            </Badge>
            <Badge variant="outline" color="gray" style={{ whiteSpace: "nowrap" }}>
              {job.salaryMin} LPA
            </Badge>
          </Group>

          <List size="sm" spacing="xs">
            <List.Item>
              <Text size="sm" c="dimmed">
              {truncateText(job.jobDescription, 50)}
              </Text>
            </List.Item>
          </List>
          <List size="sm" spacing="xs">
            <List.Item>
              <Text size="sm" c="dimmed">
              {truncateText(job.requirements, 50)}
              </Text>
            </List.Item>
          </List>
          <List size="sm" spacing="xs">
            <List.Item>
              <Text size="sm" c="dimmed">
              {truncateText(job.responsibilities, 50)}
              </Text>
            </List.Item>
          </List>
        </div>

        <Button
          fullWidth
          radius="md"
          style={{
            background: "#19B1FE",
            color: "white",
            marginTop: 'auto'
          }}
        >
          Apply Now
        </Button>
      </Stack>
    </Card>
  )
}
