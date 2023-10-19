import TeamContainer, {
  TeamDetails,
} from '@qoruz/pages/events/drive-roi-through-content/Team/team.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

const Panelist = [
  {
    Image: joinS3(
      'images/events/drive-roi-through-content/aparna-tadikonda.png'
    ),
    Name: 'Aparna Tadikonda',
    Designation: 'VP, Interactive Avenues',
  },
  {
    Image: joinS3('images/events/drive-roi-through-content/mithun-cotha.png'),
    Name: 'Mithun Cotha',
    Designation: 'VP, AutumnGrey',
  },
  {
    Image: joinS3(
      'images/events/drive-roi-through-content/shailja-saraswathi.png'
    ),
    Name: 'Shailja Saraswathi',
    Designation: 'Chief content officer, OMG',
  },
];

const Moderator = [
  {
    Image: joinS3('images/events/drive-roi-through-content/aditya-gurwara.png'),
    Name: 'Aditya Gurwara',
    Designation: 'Co-founder, Qoruz',
  },
];

const Team = () => {
  return (
    <TeamContainer>
      <h2 className='team-title'>
        Meet our panelists
        <Image
          src={joinS3('images/paid-collaboration/paid-collab-line.png')}
          alt='paid collab line'
          className='line'
          width={130}
          height={5}
        />
      </h2>
      <TeamDetails>
        {Panelist.map((item, index) => (
          <div className='team-detail flex' key={index}>
            <div className='team-image'>
              <Image
                src={item.Image}
                alt=''
                className='image'
                width={200}
                height={200}
              />
              <Image
                src={joinS3(
                  'images/events/drive-roi-through-content/icon-linkedin.svg'
                )}
                alt='linkedin-icon'
                className='social-icon'
                width={38}
                height={38}
              />
            </div>
            <div className='detail'>
              <p className='name'>{item.Name}</p>
              <p className='designation'>{item.Designation}</p>
            </div>
          </div>
        ))}
      </TeamDetails>
      <h2 className='team-title'>
        Meet our moderator
        <Image
          src={joinS3('images/paid-collaboration/paid-collab-line.png')}
          alt='paid collab line'
          className='line'
          width={150}
          height={5}
        />
      </h2>
      <TeamDetails>
        {Moderator.map((item, index) => (
          <div className='team-detail flex' key={index}>
            <div className='team-image'>
              <Image
                src={item.Image}
                alt=''
                className='image'
                width={200}
                height={200}
              />
              <Image
                src={joinS3(
                  'images/events/drive-roi-through-content/icon-linkedin.svg'
                )}
                alt='linkedin-icon'
                className='social-icon'
                width={38}
                height={38}
              />
            </div>
            <div className='detail'>
              <p className='name'>{item.Name}</p>
              <p className='designation'>{item.Designation}</p>
            </div>
          </div>
        ))}
      </TeamDetails>
    </TeamContainer>
  );
};

export default Team;
