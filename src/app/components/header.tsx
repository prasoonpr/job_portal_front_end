// "use client"

// import { AppShell, Group, Button, Text, Container, Image, Box } from "@mantine/core"
// import { useMediaQuery } from "@mantine/hooks"

// export default function Header() {
//   const isMobile = useMediaQuery("(max-width: 768px)")

//   return (
//     <AppShell.Header p="md" style={{ backgroundColor: "white", borderBottom: "1px solid #eee" }}>
//       <Container size="xl">
//         <Group justify="space-between" wrap="nowrap">
//           <Group gap="md" wrap="nowrap">
//             <Box style={{ width: 40, height: 40, backgroundColor: "#8e2de2", borderRadius: "8px" }}>
//               <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
//             </Box>
//             {!isMobile && (
//               <Group ml="xl" gap="xl" wrap="nowrap">
//                 <Text fw={500}>Home</Text>
//                 <Text fw={500}>Find Jobs</Text>
//                 <Text fw={500}>Find Talents</Text>
//                 <Text fw={500}>About us</Text>
//                 <Text fw={500}>Testimonials</Text>
//               </Group>
//             )}
//           </Group>
//           <Button
//             radius="xl"
//             size="md"
//             style={{
//               background: "linear-gradient(to right, #8e2de2, #4a00e0)",
//               color: "white",
//             }}
//           >
//             Create Jobs
//           </Button>
//         </Group>
//       </Container>
//     </AppShell.Header>
//   )
// }

"use client"

import { Group, Button, Text, Container, Image, Box } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useState } from "react"
import CreateJobModal from "./createJobModal"

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <Box
      component="header"
      // height={70}
      p="md"
      bg="white"
      // withBorder={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "50px",       // Adjusted border radius
        margin: "10px auto",        // Margin to center the entire box
        maxWidth: "70%",            // Optional: Limit the max width
        maxHeight:"60px",
        marginTop:"25px",
       
      }}
    >
      <Container size="xl">
        <Group >
          <Group>
            <Image
              src="/image.png?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              style={{ filter: "hue-rotate(290deg)" ,marginLeft:"-5px"}}
            />
            {!isMobile && (
              <Group ml="xl" gap="40px">
                <Text fw={500} style={{ fontSize: "13px" }}>Home</Text>
                <Text fw={500}style={{ fontSize: "13px" }}>Find Jobs</Text>
                <Text fw={500}style={{ fontSize: "13px" }}>Find Talents</Text>
                <Text fw={500}style={{ fontSize: "13px" }}>About us</Text>
                <Text fw={100}style={{ fontSize: "13px" }}>Testimonials</Text>
              </Group>
            )}
          </Group>
          <Button
            radius="xl"
            size="md"
            bg="violet.5"
            style={{
              marginLeft:"10px",
              background: "linear-gradient(to right, #8e2de2, #4a00e0)",
            }}
            onClick={() => setModalOpened(true)}
          >
            Create Jobs
          </Button>
        </Group>
      </Container>
      <CreateJobModal opened={modalOpened} onClose={() => setModalOpened(false)} />
    </Box>
  )
}
