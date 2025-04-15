

"use client"
import { formatDistanceToNow } from 'date-fns'
import { Card, Image, Text, Badge, Button, Group, Stack, List, Box } from "@mantine/core"
import type { JobType } from "@/app/types/index"
import { IconBuilding, IconLayersDifference, IconStack, IconUserPlus } from '@tabler/icons-react'

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
    <Card shadow="sm" padding="lg" radius="md"  style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Section p="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Box
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)", 
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
              }}
            >
              <Box
                style={{
                  backgroundColor: "#fff", 
                  borderRadius: "50%",    
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`https://jobportalserver.prasoonpr.tech${job.companyLogo}`}
                  alt={job.companyName}
                
                  fit="cover"          
                  width="100%"         
                  height="100%"  
                />
              </Box>
            </Box>
          {/* <Image src={`https://jobportalserver.prasoonpr.tech${job.companyLogo}`} alt={job.companyName} width={60} height={60} radius="md" /> */}
          <Badge color="black" style={{backgroundColor:"#9bc6f6" ,height:"30px",borderRadius:"10px", color:"black" , fontWeight:"500" ,textTransform: "none"}}>
            {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
          </Badge>
        </Group>
      </Card.Section>

      <Stack style={{ flex: 1, justifyContent: 'space-between' }}>
        <div style={{ flexGrow: 1 }}>
          <Text fw={600} size="lg" style={{marginBottom:"10px"}}>
            {job.jobTitle}
          </Text>

          <Group style={{ flexWrap: "nowrap", gap: "13px" ,marginBottom:"10px" }}>
            <Badge variant="outline" color="gray"
             style={{ whiteSpace: "nowrap", border: "none",        
            background: "none",   
            paddingLeft: 0,
            paddingRight: 0, 
            fontSize: "12px",        
            fontWeight: 500,
            color: "#555 " ,
            textTransform: "none"
            }}>
              
              <IconUserPlus size={14}/> {job.experience}yr EXP
            </Badge>
            <Badge variant="outline" color="gray" style={{ whiteSpace: "nowrap", border: "none",        
            background: "none",   
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: "12px",        
            fontWeight: 500,
            color: "#555  ",
            textTransform: "none" 
            }}>
              <IconBuilding size={14}/> {job.workLocation}
            </Badge>
            <Badge variant="outline" color="gray" style={{ whiteSpace: "nowrap", border: "none",        
            background: "none",   
            paddingLeft: 0,
            paddingRight: 0, 
            fontSize: "12px",        
            fontWeight: 500,
            color: "#555 " 
            }}>
              <IconStack size={14}/> {job.salaryMin}LPA
            </Badge>
          </Group>

          <List size="sm" spacing="xs">
            {/* <List.Item>
              <Text size="sm" c="dimmed">
              {truncateText(job.jobDescription, 50)}
              </Text>
            </List.Item> */}
          </List>
          <List size="sm" spacing="xs">
            <List.Item>
              <Text size="xs"  c="#555">
              {truncateText(job.requirements, 50)}
              </Text>
            </List.Item>
          </List>
          <List size="sm" spacing="xs">
            <List.Item>
              <Text size="xs" c="#555">
              {truncateText(job.responsibilities, 50)}
              </Text>
            </List.Item>
          </List>
        </div>

        <Button
          fullWidth
          radius="md"
          
          style={{
            boxShadow:"0 2px 2px rgba(0, 0, 0, 0.1)",
            background: "#19B1FE",
            color: "white",
            marginTop: 'auto',
            height:"40px"
          }}
        >
          Apply Now
        </Button>
      </Stack>
    </Card>
  )
}
