import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Divider, SimpleGrid } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import { entertainmentURL } from "../apiRequest";
import Footer from "../components/Footer";
function Entertainment() {
  const [topNews, setTopNews] = useState([]);
  const [national, setNationaNews] = useState([]);
  const [international, setInternationalNews] = useState([]);
  const [films, setFilmsNews] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPoliticsNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`${entertainmentURL}`);
        const data = await response.json();
        setTopNews(data.filter( item => item.category === "top-news" ? true:false ) )
        setNationaNews(data.filter( item => item.category === "national" ? true:false ) )
        setInternationalNews(data.filter( item => item.category === "International" ? true:false ) )
        setFilmsNews(data.filter( item => item.category === "films" ? true:false ) )
        setRelatedNews(data.filter( item => item.category === "related-news" ? true:false ) )
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error) ;
        setLoading(false);
        setError(true);
      }
      
    };
    fetchPoliticsNews();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
          <Heading>Loading...</Heading>
        ) : error ? (
          <Heading>Error...</Heading>
        ) : ( <>
              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Top News
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {topNews?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  National Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {national?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  International Headlines
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {international?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Films
                </Heading>
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {films?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>

              <Box as="section" py="5" bg="gray.100">
                <Heading as="h1" size="xl" ml={["10px", "50px", "100px"]} mb="5"
                  textDecoration="underline"
                >
                  Related News
                </Heading>
              
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="20px"
                  px={["10px", "50px", "100px"]}
                >
                  {relatedNews?.map((newsItem, index) => {
                    return <CardComponent newsItem={newsItem} key={index} />
                  })}
                </SimpleGrid>
              </Box>
              </>
        )
      }
      <Footer/>
    </>
  );
}
export default Entertainment;