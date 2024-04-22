import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Chapters from 'pages/Chapters/Chapters';
import Exercises from 'pages/Exercises/Exercises';
import Contributions from 'pages/Contributions/Contributions';
import Header from 'components/Header/Header';
import ChapterDetail from 'components/ChapterDetail/ChapterDetail';
import ExercisesDetail from 'components/ExercisesDetail/ExercisesDetail';
import Projects from 'pages/Projects/Projects';
import ProjectDetail from 'components/ProjectDetail/ProjectDetail';

// data 
import { projectsData } from 'pages/Projects/Projects';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/chapters/:chapterId" element={<ChapterDetail />} />
                <Route path="/exercises" element={<Exercises />}  />
                <Route path="/exercises/:exerciseId" element={<ExercisesDetail/>} />
                <Route path="/projects" element={<Projects />} />
             <Route path="/projects/:projectId" render={(props) => <ProjectDetail projectId={parseInt(props.match.params.projectId, 10)} />} />

                <Route path="/contributions" element={<Contributions />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
