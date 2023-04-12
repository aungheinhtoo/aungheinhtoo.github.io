import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink, EducationItem, Institution, Degree, EducationTimeRange } from './styles';
import moment from 'moment';
import { SocialIconsMap } from '../../utils/IconMaps';
import { useHistory } from 'react-router-dom';

const Me = ({ user }) => {
  // const history = useHistory();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const offsetHeight = document.documentElement.offsetHeight;

  //     if (scrollY + clientHeight >= offsetHeight) {
  //       // You can change the route here
  //       history.push('/work');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [history]);

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <SectionTitle>Education</SectionTitle>
      <ul>
        {user.education.map((education, i) => (
          <EducationItem key={i}>
            <Institution>
              <span>{education.institution}</span>
              <EducationTimeRange>
                {moment(education.startDate).format("MMM YYYY")} to {moment(education.endDate).format("MMM YYYY")}
              </EducationTimeRange>
            </Institution>
            <div>
              <Degree>
                {education.studyType}, {education.area}
              </Degree>{' '}
            </div>
            <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            <Paragraph>{education.activities ? education.activities.replace('\n\n', '\n') : null}</Paragraph>
          </EducationItem>
        ))}
      </ul>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.filter(profile => Object.keys(SocialIconsMap).includes(profile.network)).map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              {SocialIconsMap[profile.network]} <span>&nbsp;</span>
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
