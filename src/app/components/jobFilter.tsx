"use client"

import { useForm, Controller } from "react-hook-form"
import { Group, TextInput, Select, RangeSlider, Text, Paper, Stack, Box, Divider } from "@mantine/core"
import { IconSearch, IconMapPin, IconBriefcase, IconUser, IconChevronDown } from "@tabler/icons-react"

interface FilterSectionProps {
  onFilter: (filters: any) => void
}

export default function FilterSection({ onFilter }: FilterSectionProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      location: "",
      jobType: "",
      salaryRange: [0, 2000],
    },
  })

  const onSubmit = (data: any) => {
    onFilter(data)
  }

  return (
    <Paper p="sm"  radius={0} style={{marginBottom:"5px"}}>
      <form >
        {/* <Group style={{ width: "100%" }}> */}
        <Group
            wrap="wrap"
            justify="center"
            align="start"
            style={{ width: "100%", marginLeft:"30px"}}
          >

          {/* Search Input */}
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Search By Job Title, Role"
                leftSection={<IconSearch  size={16} />}
                size="md"
                variant="unstyled"
                styles={{ input: { fontSize: "13px" } }}
                classNames={{
                  input: "custom-placeholder", 
                }}
                onChange={(e) => {
                  field.onChange(e);
                  handleSubmit(onSubmit)();
                }}
              />
            )}
          />

          <Divider orientation="vertical" size="sm" color="gray.1" style={{ height: "40px", marginTop: "10px", marginLeft: "40px" }} />

          {/* Location Select */}
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Preferred Location"
                leftSection={<IconMapPin color="gray" size={16} />}
                data={["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai"]}
                size="md"
                clearable
                variant="unstyled"
               style={{maxWidth:"230px"}}
                classNames={{
                  input: "custom-placeholder", 
                }}
                rightSection={<IconChevronDown size={16} />} 
                  onChange={(e) => {
                  field.onChange(e ?? "");
                  handleSubmit(onSubmit)();
                }}
              />
            )}
          />

          <Divider orientation="vertical" size="sm" color="gray.1" style={{ height: "40px", marginTop: "10px", marginLeft:"20px" }} />

          {/* Job Type Select */}
          <Controller
            name="jobType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Job Type"
                leftSection={<IconUser color="gray" size={16} />}
                
                data={["Full-time", "Part-time", "Contract", "Freelance", "Internship"]}
                size="md"
                clearable
                variant="unstyled"
                rightSection={<IconChevronDown size={16} />} 
                 style={{maxWidth:"230px"}}
                classNames={{
                  input: "custom-placeholder", 
                }}
                onChange={(e) => {
                  field.onChange(e ?? "");
                  handleSubmit(onSubmit)();
                }}
              />
            )}
          />

          <Divider orientation="vertical" size="sm" color="gray.1" style={{ height: "40px", marginTop: "10px" ,marginLeft:"20px"}} />

          {/* Salary Range Slider */}
          <Box style={{ flex: 1, maxWidth: "300px", marginLeft: "20px" }}>
            <Controller
              name="salaryRange"
              control={control}
              render={({ field }) => (
                <Stack gap="sm">
                  <Text size="xs" style={{ fontWeight: 500 }}>
                    Salary Per Month&nbsp;&nbsp;
                    <span style={{ fontSize: "12px", marginLeft: "30px" }}>
                      ₹{field.value[0]}k - ₹{field.value[1]}k
                    </span>
                  </Text>
                  <RangeSlider
                    {...field}
                    value={Array.isArray(field.value) ? [field.value[0], field.value[1]] : [0, 0]} 
                    min={0}
                    max={2000}
                    step={5}
                    minRange={10}
                    thumbSize={10} // small dots
                    size="xs" // small track height
                    color="dark"
                    styles={{
                      track: { height: 2 },
                      thumb: { width: 11, height: 11 },
                    }}
                    style={{ marginTop: "4px", maxWidth: "200px" }}
                    onChange={(e) => {
                      field.onChange(e);
                      handleSubmit(onSubmit)();
                    }}  
                  />
                </Stack>
              )}
            />
          </Box>

        </Group>
      </form>
    </Paper>
  )
}
