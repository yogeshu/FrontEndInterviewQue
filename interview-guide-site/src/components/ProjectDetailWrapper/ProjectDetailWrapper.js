import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from 'components/ProjectDetail/ProjectDetail';

const ProjectDetailWrapper = () => {
  let { projectId } = useParams();
  return <ProjectDetail projectId={parseInt(projectId, 10)} />;
};

export default ProjectDetailWrapper;