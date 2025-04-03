"use client"
import { Modal, TextInput, Select, Textarea, Button, Group, Text, Grid, NumberInput, FileInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { useForm, Controller } from "react-hook-form"
import { IconCalendar, IconChevronDown, IconArrowRight, IconUpload } from "@tabler/icons-react"
// import axiosInstance from "../axiosInstance"

interface CreateJobModalProps {
  opened: boolean
  onClose: () => void
}

export default function CreateJobModal({ opened, onClose }: CreateJobModalProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      jobTitle: "",
      companyName: "",
      companyLogo:[],
      location: "",
      jobType: "",
      workLocation: "",
      experience: "",
      salaryMin: 0,
      salaryMax: 0,
      applicationDeadline: null,
      requirements: "",
      responsibilities:"",
      jobDescription: "",
    },
  })
  const onSubmit = async (data: any) => {
    console.log("Testing with fetch");
    try {
      if (data.applicationDeadline) {
        data.applicationDeadline = new Date(data.applicationDeadline).toISOString();
      }
      const formData = new FormData();
    for (const key in data) {
      if (key === "companyLogo" && data[key][0]) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }
      const response = await fetch("http://localhost:3000/jobs", {
        method: "POST",
        body: formData
      });
      onClose()
      window.location.reload()
      const result = await response.json();
      console.log("Fetch response:", result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Create Job Opening"
      centered
      size="lg"
      styles={{
        title: {
          fontSize: "20px",
          fontWeight: 600,
          textAlign: "center",
          width: "100%",
        },
        header: {
          padding: "20px 0",
        
        },
        body: {
          padding: "0 20px 20px",
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Text size="sm" fw={500} mb={5}>
              Job Title
            </Text>
            <Controller
              name="jobTitle"
              control={control}
              rules={{ required: "Job title is required" }}
              render={({ field ,fieldState}) => <TextInput {...field} placeholder="Full Stack Developer" error={fieldState.error?.message}/>}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Text size="sm" fw={500} mb={5}>
              Company Name
            </Text>
            <Controller
              name="companyName"
              control={control}
              rules={{ required: "Company name is required" }}
              render={({ field,fieldState }) => <TextInput {...field} placeholder="Amazon, Microsoft, Swiggy" error={fieldState.error?.message} />}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text size="sm" fw={500} mb={5}>Company Logo</Text>
            <Controller
              name="companyLogo"
              control={control}
              render={({ field }) => (
                <FileInput {...field} value={field.value[0] || null}  onChange={(file) => field.onChange(file ? [file] : [])} 
                 placeholder="Upload logo" rightSection={<IconUpload size={14} />} />
              )}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <Text size="sm" fw={500} mb={5}>
              Location
            </Text>
            <Controller
              name="location"
              control={control}
              rules={{ required: "Location is required" }}
              render={({ field ,fieldState}) => (
                <Select
                  {...field}
                  placeholder="Choose Preferred Location"
                  data={["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai"]}
                  error={fieldState.error?.message}
                  rightSection={<IconChevronDown size={14} />}
                 
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <Text size="sm" fw={500} mb={5}>
              Job Type
            </Text>
            <Controller
              name="jobType"
              control={control}
              rules={{ required: "Job type is required" }}
              render={({ field,fieldState }) => (
                <Select
                  {...field}
                  placeholder="Select Job Type"
                  data={["Full-time", "Part-time", "Contract", "Freelance", "Internship"]}
                  defaultValue="Full-time"
                  error={fieldState.error?.message}
                  rightSection={<IconChevronDown size={14} />}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <Text size="sm" fw={500} mb={5}>
              Salary Range(LPA)
            </Text>
            <Group grow>
              <Controller
                name="salaryMin"
                control={control}
                rules={{ required: "Salary range is required" }}
                render={({ field ,fieldState}) => (
                  <NumberInput {...field} placeholder="₹0" leftSection="₹" thousandSeparator="," error={fieldState.error?.message}/>
                )}
              />

              <Controller
                name="salaryMax"
                control={control}
                rules={{ required: "Salary range is required" }}
                render={({ field ,fieldState}) => (
                  <NumberInput {...field} placeholder="₹12,00,000" leftSection="₹" thousandSeparator="," error={fieldState.error?.message}/>
                )}
              />

              <Controller
                name="applicationDeadline"
                control={control}
                rules={{ required: "Application deadline is required" }}
                render={({ field,fieldState }) => (
                  <DatePickerInput
                  {...field}
                  valueFormat="DD MMM YYYY"
                  placeholder="Application Deadline"
                  error={fieldState.error?.message}
                  leftSection={<IconCalendar size={16} />}
                  clearable
                />
                )}
              />
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="sm" fw={500} mb={5}>
              Work Location
            </Text>
            <Controller
              name="workLocation"
              control={control}
              rules={{ required: "Work location is required" }}
              render={({ field ,fieldState}) => (
                <Select
                  {...field}
                  placeholder="Select Work Location"
                  data={["Remote", "Hybrid", "Onsite"]}
                  error={fieldState.error?.message}
                  rightSection={<IconChevronDown size={14} />}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Text size="sm" fw={500} mb={5}>
              Experience
            </Text>
            <Controller
              name="experience"
              rules={{ required: "Experience is required" }}
              control={control}
              render={({ field ,fieldState}) => (
                <TextInput {...field} placeholder="e.g., 2-3 " error={fieldState.error?.message} />
              )}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size="sm" fw={500} mb={1}>
              Responsibilities
            </Text>
            <Controller
              name="responsibilities"
              control={control}
              rules={{ required: "Responsibilities are required" }}
              render={({ field, fieldState }) => (
                <Textarea {...field} placeholder="Describe the responsibilities for this role" minRows={3} autosize error={fieldState.error?.message} />
              )}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <Text size="sm" fw={500} mb={1}>
              Requirements
            </Text>
            <Controller
              name="requirements"
              control={control}
              rules={{ required: "Requirements are required" }}
              render={({ field, fieldState }) => (
                <Textarea {...field} placeholder="List the requirements for this role" minRows={3} autosize error={fieldState.error?.message} />
              )}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size="sm" fw={500} mb={1}>
              Job Description
            </Text>
            <Controller
              name="jobDescription"
              control={control}
              rules={{ required: "Job description is required" }}
              render={({ field,fieldState }) => (
                <Textarea
                  {...field}
                  placeholder="Please share a description to let the candidate know more about the job role"
                  minRows={5}
                  error={fieldState.error?.message}
                  autosize
                />
              )}
            />
          </Grid.Col>
        </Grid>

        <Group justify="space-between" mt="sm">
          <Button variant="outline" color="gray" rightSection={<IconChevronDown size={14} />}>
            Save Draft
          </Button>

          <Button
            type="submit"
            rightSection={<IconArrowRight size={14} />}
            style={{
              background: "#00AAFF",
              color: "white",
            }}
          >
            Publish
          </Button>
        </Group>
      </form>
    </Modal>
  )
}

