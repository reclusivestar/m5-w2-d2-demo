import React from "react";
import {
  Routes, Route, Link, useResolvedPath, useParams
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Topics() {
  const resolvedPath = useResolvedPath("");
  const basePath = resolvedPath.pathname; // Replaces match.path and match.url in v6

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${basePath}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${basePath}/dogs`}>Dogs</Link>
        </li>
      </ul>

      <Routes>
        <Route path={`${basePath}/:topicId`} element={<Topic />} />
        <Route
          path={basePath}
          element={<h3>Please select a topic.</h3>}
        />
      </Routes>
    </div>
  );
}
