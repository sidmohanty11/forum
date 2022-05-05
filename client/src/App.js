import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import NewPost from "./pages/new";
import Login from "./pages/login";
import Register from "./pages/register";
import Post from "./pages/post";
import Blogs from "./pages/blogs";
import Discussions from "./pages/discussions";
import Trending from "./pages/trending";
import Questions from "./pages/questions";
import Profile from "./pages/profile";
import NotFound from "./pages/404";
import { useAuth } from "./hooks/use-auth";
import { UserContext } from "./context/UserContext";

function App() {
  const { tokenIsPresent, userId } = useAuth();
  return (
    <UserContext.Provider value={{ userId }}>
      <ChakraProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route exact index path="/" element={<Home />} />
          <Route exact path="/new" element={<NewPost />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/blog" element={<Blogs />} />
          <Route exact path="/discussion" element={<Discussions />} />
          <Route exact path="/question" element={<Questions />} />
          <Route exact path="/trending" element={<Trending />} />
          <Route exact path="/users/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

export default App;
