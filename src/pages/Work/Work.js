import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, WorkTimeRange } from './styles';
import { ListItem } from '../../styles';
import { UnorderedList } from '../../styles';
import { SkillContainer } from '../Projects/styles';
import { Pill } from '../../styles';
import moment from 'moment';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}<WorkTimeRange>
                {moment(work.startDate).format("MMM YYYY")} to {work.endDate ? moment(work.endDate).format("MMM YYYY") : "Current"}
              </WorkTimeRange></WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
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
