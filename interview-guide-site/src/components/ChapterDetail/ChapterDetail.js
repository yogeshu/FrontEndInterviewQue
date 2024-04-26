import React from 'react';
import { useParams } from 'react-router-dom';
import chapterDetails from 'utils/constants/chapterDetails'; // Assuming this file contains detailed data for chapters
import styles from './ChapterDetail.module.css';

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const chapter = chapterDetails.find(ch => ch.id === parseInt(chapterId));

  if (!chapter) {
    return <div className={styles.notFound}>Chapter not found!</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>{chapter.title}</h1>
      <div className={styles.content}>
        {chapter.sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionContent}>{section.content}</p>
            {section.code && <pre className={styles.code}><code>{section.code}</code></pre>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterDetail;
