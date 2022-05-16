import React, { FC, useEffect, useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useQuery } from "@apollo/client";
import { GET_POSTS_BY_SEARCH } from "../lib/getPostsBySearch";
import useDebounce from "../hooks/use-debounce";
import PostPreview from "./PostPreview";
import { PostType } from "../shared/PostType";

const Layout: FC = ({ children }) => {
  const [input, setInput] = useState("");
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const search = useDebounce(input, 1000);
  const { data } = useQuery(GET_POSTS_BY_SEARCH, { variables: { search } });

  useEffect(() => {
    if (search && data) {
      setIsSearching(true);
      setSearchedPosts(data.postsBySearch);
    } else {
      setIsSearching(false);
    }
  }, [search, data]);

  return (
    <Box>
      <Navbar />
      <Sidebar>
        <Box>
          <Center>
            <Input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="search"
              maxW={800}
            />
          </Center>
          {isSearching
            ? searchedPosts.map((post: PostType) => (
                <PostPreview key={post.id} post={post} />
              ))
            : children}
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Layout;
