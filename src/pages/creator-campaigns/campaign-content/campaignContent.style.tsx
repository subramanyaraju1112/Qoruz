import { styled } from '@stitches-config/stitches.config';

const CampaignCardStyled = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',
  '.influencer-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
    padding: '56px 60px',
    overflow: 'auto',
    '.other-influencer': {
      fontWeight: '600',
      fontSize: '32px',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
      color: '#000000',
    },
    '.card-wrapper': {
      display: 'flex',
      overflowX: 'auto',
      pl: 3,
      pr: 3,
      gap: 5,
      '@xl': {
        padding: 10,
        gap: 8,
      },
    },
    '@lg': {
      padding: '56px 24px',
      overflow: 'auto',
    },
  },
  '.campaign-card': {
    maxWidth: 260,
    width: '24%',
    minWidth: 250,
    cursor: 'pointer',
    padding: 0,
    mb: 17,
    filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))',
    boxShadow: 'unset',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '.image-box': {
      overflow: 'hidden',
      height: 206,
      '.influ-image': {
        height: 206,
        width: '$full',
        objectFit: 'cover',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        aspectRatio: '16/9',
      },
    },
    '.campaing-detail': {
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 158,
      '.brand-name': {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#FF6435',
        opacity: 0.6,
      },
      '.campaign-title': {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '-0.02em',
        color: '#000000',
        mt: 2,
      },
      '.agency': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '-0.02em',
        color: '#000000',
        mt: 8,
      },
      '.nav-arrow': {
        textAlign: 'right',
        mt: 8,
        height: 24,
      },
    },
    '&:hover': {
      boxShadow: '0px 4px 25px 1px rgba(0, 0, 0, 0.08)',
      '.brand-name': {
        opacity: 1,
      },
      '.campaign-title': {
        color: '#FF6435',
      },
      '.agency': {
        color: '#FF6435',
      },
    },
    '@sm': {
      minWidth: 312,
      mx: 'auto',
    },
  },
  '.static-image': {
    '.image-box': {
      '.influ-image': {
        objectFit: 'cover',
      },
    },
  },
});

const RowCard = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gridGap: '7px',
  width: '100%',
  height: 'fit-content',
  '&.no-data': {
    height: '100vh',
  },
});

const NoData = styled('h1', {
  width: '100%',
  textAlign: 'center',
  left: '2%',
  position: 'absolute',
  fontSize: '40px',
  fontWeight: 700,
  opacity: 0.5,
});

export default CampaignCardStyled;
export { NoData, RowCard };
