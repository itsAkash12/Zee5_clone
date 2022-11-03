import { Box, Center, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "./Footer";
const music = [
  {
    video: "https://www.youtube.com/embed/Sb9SsxBPBEU",
    title: "Diljit Dosanjh Lemonade (Visualiser) | Drive Thru",
  },
  {
    video: "https://www.youtube.com/embed/RLhuPD2ASKE",
    title: "We Rollin (Official Audio) - Shubh",
  },
  {
    video: "https://www.youtube.com/embed/OP4AQqC8ss4",
    title: "Shubh - Baller (Official Music Video) ",
  },
  {
    video: "https://www.youtube.com/embed/wujewK7E0dc",
    title: "Judge : Mankirt Aulakh (Official Video)",
  },
  {
    video: "https://www.youtube.com/embed/2w5kg8BfSD0",
    title: "Mankirt Aulakh: Jail Official Song",
  },
  {
    video: "https://www.youtube.com/embed/M8vDwlHigJA",
    title: "GOAT (Full Video) Sidhu Moose Wala",
  },
  {
    video: "https://www.youtube.com/embed/H6tFxphsZQs",
    title: "MANKIRT AULAKH - JATT DI CLIP",
  },
  {
    video: "https://www.youtube.com/embed/vg0ZfeszGrU",
    title: "Difference | Amrit Maan ft Sonia Maan",
  },
  {
    video: "https://www.youtube.com/embed/tpFljbJxZiw",
    title: "LEVELS - Official Video",
  },
  {
    video: "https://www.youtube.com/embed/D4fC4HVpP3M",
    title: "Its All About You | Sidhu Moose Wala",
  },
  {
    video: "https://www.youtube.com/embed/T-ztCxK4H00",
    title: "King - Desi Dan Bilzerian",
  },
  {
    video: "https://www.youtube.com/embed/8Z8qobg8UdA",
    title: "Get Up Jawani- Yo Yo Honey Singh",
  },
  {
    video: "https://www.youtube.com/embed/PJGVDaSaQWQ",
    title: "'2 Many Girls' FULL VIDEO SONG",
  },
  {
    video: "https://www.youtube.com/embed/uaCYeQ9FtSI",
    title: "Official: Issey Kehte Hain Hip Hop",
  },
  {
    video: "https://www.youtube.com/embed/ReXw6TOnUOc",
    title: "All Black Full Song",
  },
  {
    video: "https://www.youtube.com/embed/i2GC06euEDE",
    title: "Jaguar | Muzical Doctorz Sukhe Feat Bohemia",
  },
  {
    video: "https://www.youtube.com/embed/iMdH_G4N9nY",
    title: "Wakhra Swag | Official Video",
  },
  {
    video: "https://www.youtube.com/embed/OulN7vTDq1I",
    title: "Badshah - DJ Waley Babu",
  },
  {
    video: "https://www.youtube.com/embed/bzW9fmwcmG4",
    title: "Daru Badnaam | Kamal Kahlon & Param Singh",
  },
  {
    video: "https://www.youtube.com/embed/q1wK0r51ARs",
    title: "Gabru - J Star ft Yo Yo Honey Singh",
  },
  {
    video: "https://www.youtube.com/embed/NrXdauEv9HY",
    title: "Dope Shope - Yo Yo Honey Singh and Deep Money",
  },
  {
    video: "https://www.youtube.com/embed/Wr2NN4VQ1nI",
    title: "Daaru Party (Full Song) | Millind Gaba",
  },
  {
    video: "https://www.youtube.com/embed/TwFBtV13KQQ",
    title: "One Bottle Down' Full Song with LYRICS",
  },
  {
    video: "https://www.youtube.com/embed/EpJk_dSpjVM",
    title: "Yo Yo Honey Singh - Break Up Party",
  },
  {
    video: "https://www.youtube.com/embed/-j0dlcfekqw",
    title: "Otilia - Bilionera (official video)",
  },
  {
    video: "https://www.youtube.com/embed/JOX09U8noOE",
    title: "Imran Khan - Pata Chalgea (Un-Official Video)",
  },
  {
    video: "https://www.youtube.com/embed/JYodEWUdIso",
    title: "Imran khan - Bewafa (Official Music Video)",
  },
  {
    video: "https://www.youtube.com/embed/A66TYFdz8YA",
    title: "King - Tu Aake Dekhle | The Carnival",
  },
  {
    video: "https://www.youtube.com/embed/PWaPCqeCfeY",
    title: "Sulthan Video Song (Hindi) | KGF Chapter 2",
  },
  {
    video: "https://www.youtube.com/embed/BJahIa255qc",
    title: "Pushpa: Eyy Bidda Ye Mera Adda (Video) |",
  },
];

const Music = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Grid gridTemplateColumns="repeat(3,1fr)" width="90%" margin="auto" gap="20px">
        {music.map((el) => (
          <GridItem margin="auto">
            <iframe
              src={el.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Text>{el.title}</Text>
          </GridItem>
        ))}
      </Grid>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Music;
