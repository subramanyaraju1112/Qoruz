import LinkIcon from '@qoruz/components/svg/linkIcon';
import Link from 'next/link';

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outline-light'
    | 'simple'
    | 'pill';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showShadow?: boolean;
  margin?: boolean;
}
interface LinkProps extends BaseProps {
  type: 'link';
  href: string;
  target?: string;
  rel?: string;
}

interface ButtonProps extends BaseProps {
  type: 'button';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

type Props = ButtonProps | LinkProps;

const Button = (props: Props) => {
  const {
    type,
    children,
    className = '',
    variant,
    text,
    size,
    showIcon = false,
    icon = <LinkIcon />,
    iconPosition = 'right',
    style,
    showShadow = false,
    margin = false,
    ...rest
  } = props;
  if (type === 'link') {
    const { href, target, rel } = props;
    return (
      <Link
        target={target}
        rel={rel}
        href={href as string}
        className={`button ${className} ${size} ${variant} ${
          showShadow ? 'shadow' : ''
        } ${margin ? 'margin-top' : ''}`}
        style={style}
        {...rest}
      >
        {showIcon && iconPosition === 'left' && icon}
        {children || text}
        {showIcon && iconPosition === 'right' && icon}
      </Link>
    );
  } else {
    const { disabled, onClick } = props;
    return (
      <button
        className={` custom-button button ${className} ${size} ${variant} ${
          showShadow ? 'shadow' : ''
        } ${margin ? 'margin-top' : ''}`}
        onClick={onClick}
        disabled={disabled}
        style={style}
        {...rest}
      >
        {showIcon && iconPosition === 'left' && icon}
        {children || text}
        {showIcon && iconPosition === 'right' && icon}
      </button>
    );
  }
};

// const ButtonStyle = styled('button', {
//   borderRadius: 50,
//   fontWeight: '$semibold',
//   fontSize: 20,
//   letterSpacing: '$sm',
//   padding: '7px 18px',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: 'max-content',
//   minHeight: 48,
//   boxShadow: '$lg',
//   border: 0,
//   '> svg, > img': {
//     marginLeft: '$xs',
//   },
//   '&.sm': {
//     minHeight: 32,
//     fontSize: 12,
//   },
//   '&.md': {
//     minHeight: 40,
//     fontSize: 14,
//   },
//   '&.lg': {
//     minHeight: 48,
//     fontSize: 16,
//   },
//   '&.primary': {
//     color: '$primary',
//     backgroundColor: '$white',
//     '&:hover': {
//       color: '$white',
//       backgroundColor: '$primary',
//       '.fill-social-icon': {
//         fill: '$white',
//       },
//     },
//   },
//   '&.theme': {
//     backgroundColor: '$primary',
//     color: 'white',
//     svg: {
//       path: {
//         fill: 'white',
//       },
//     },
//   },
//   '&.secondary': {
//     color: '$primary',
//     background: 'linear-gradient(to right, rgb(255, 100, 53) 50%, white 50%)',
//     backgroundColor: '$white',
//     backgroundSize: '200% 100%',
//     backgroundPosition: 'right bottom',
//     transition: 'all .5s ease-out',
//     '&:hover': {
//       color: '$white',
//       backgroundColor: '$primary',
//       backgroundPosition: 'left bottom',
//       '.fill-social-icon': {
//         fill: '$white',
//       },
//     },
//   },
//   '&.outline': {
//     color: '$white',
//     backgroundColor: 'transparent',
//     border: '1px solid $white',
//     background: 'linear-gradient(to right, white 50%, transparent 50%)',
//     backgroundSize: '200% 100%',
//     backgroundPosition: 'right bottom',
//     transition: 'all .5s ease-out',
//     '&:hover': {
//       color: '$primary',
//       backgroundColor: '$primary',
//       backgroundPosition: 'left bottom',
//       '.fill-social-icon': {
//         fill: '$primary',
//       },
//     },
//   },
// });

export default Button;
