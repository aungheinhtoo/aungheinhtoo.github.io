import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink, BlueText, LightBlueText } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  function processUserBasicsLabel(userBasicsLabel) {
    let Split = userBasicsLabel.split("|");
    return [<BlueText>{Split[0]}</BlueText>,  <>|</>, <BlueText>{Split[1]}</BlueText>]
  }

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          {/* <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4> */}
          <p>{processUserBasicsLabel(user.basics.label).slice(0, 1).map(element => element)}</p>
          <p>{processUserBasicsLabel(user.basics.label).slice(2, 3).map(element => element)}</p>
          {/* <p>Based in {user.basics.region}</p> */}
          {/* <p>{user.basics.yearsOfExperience} years of experience as a developer</p> */}
          <em><p><LightBlueText>{user.basics.headline}</LightBlueText></p></em>
          {/* <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p> */}
        </div>
      </Header>
      {/* <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div> */}
    </HeaderContainer>
  );
};

export default UserHeader;
