import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';
import { ListItem } from '../../styles';
import { UnorderedList } from '../../styles';
import { SkillContainer } from '../Projects/styles';
import { Pill } from '../../styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year ? work.end.year : "Current"}
                </span>
              </div>
              <UnorderedList>
                {work.summary.split('\n').map(item => (
                  <ListItem key={item}>
                    <Paragraph>
                      <span> &sdot; </span>
                      {item}
                    </Paragraph>
                  </ListItem>
                ))}
              </UnorderedList>
              <SkillContainer>
                {work.highlights.map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
