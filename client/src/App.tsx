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
import { useColorModeEditor } from "./hooks/use-color-mode-editor";
import { UserContext } from "./context/UserContext";

function App() {
  useColorModeEditor();
  const { tokenIsPresent, userId } = useAuth();
  return (
    <UserContext.Provider value={{ userId, tokenIsPresent }}>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/discussion" element={<Discussions />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

export default App;
