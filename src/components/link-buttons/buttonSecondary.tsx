import LinkIcon from '@qoruz/components/svg/linkIcon';
import MessageIcon from '@qoruz/components/svg/message';
import Link from 'next/link';
const ButtonSecondary = (props: any) => {
  const { text, redirectUrl, size, icon } = props;
  return (
    <>
      {!redirectUrl ? (
        <Link
          // target='_blank'
          href=''
          className={`outline-button primary ${size} secondary-button`}
          // className={`${!invertColors ? 'primary-btn' : 'primary-btn-inverted'}`}
          // className={ButtonPrimaryStyle.overlay}
        >
          {icon == 'messageIcon' && <MessageIcon />}
          {text}
          {icon == 'linkIcon' && <LinkIcon />}
        </Link>
      ) : (
        <Link
          target='_blank'
          href={redirectUrl}
          className={`outline-button primary ${size} secondary-button`}
          // className={`${!invertColors ? 'primary-btn' : 'primary-btn-inverted'}`}
          // className={ButtonPrimaryStyle.overlay}
        >
          {icon == 'messageIcon' && <MessageIcon />}
          {text}
          {icon == 'linkIcon' && <LinkIcon />}
        </Link>
      )}
    </>
  );
};

export default ButtonSecondary;
