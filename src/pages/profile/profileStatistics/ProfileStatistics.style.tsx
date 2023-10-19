import { styled } from '@stitches-config/stitches.config';

const ProfileStatisticsStyled = styled('div', {
  bgColor: '#FFFFFF',
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  br: 16,
  p: '$lg',
  gap: '$lg',
  h4: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    fontSize: 20,
    letterSpacing: '$xs',
    gap: 12,
    svg: {
      size: 20,
      '.fill-aside-list-icon': {
        fill: '#000',
      }
    }
  }
});

const ProfileStatisticsInfo = styled('div', {
  gap: '$sm',
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$xs',
    color: '#666',
  },
  h4: {
    fontSize: 20,
    fontWeight: '$medium',
    color: '#000',
  },
});

const Figure = styled('figure', {
  size: 52,
  br: '$round',
  overflow: 'hidden',
  img: {
    size: '$full',
    objectFit: 'cover',
  }
});

const StatisticRow = styled('div', {
  gap: '$md',
  width: '$full',
});

const PlatformStatsList = styled('ul', {
  gap: '$lg',
});

const StatisticBlock = styled('div', {
  bgColor: '#F9F9F9',
  br: 16,
  p: '$lg',
  gap: '$md',
});

const PlatformStatsListItem = styled('li', {
  width: 'calc(50% - 8px)',
  gap: '$md',
  h3: {
    width: '$full',
    gap: '$sm',
    fontSize: 20,
  },
  '@xl': {
    width: '$full',
  },
  '@lg': {
    width: 'calc(50% - 8px)',
  },
  '@xs': {
    width: '$full',
  },
});

export default ProfileStatisticsStyled;
export {
  Figure, PlatformStatsList, PlatformStatsListItem, ProfileStatisticsInfo, StatisticBlock,
  StatisticRow
};
