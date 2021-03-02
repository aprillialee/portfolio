import Link from "next/link";

import styled from "styled-components";

function MenuOptions({ open }) {
  return (
    <MenuOptionsStyled open={open}>
      <Link href="/">
        <MenuOption>
          <svg
            width="25"
            height="25"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 18H2.5C2.22386 18 2 17.7761 2 17.5V8.5C2 8.22386 1.77614 8 1.5 8H0.92539C0.452752 8 0.243975 7.40482 0.613043 7.10957L9.17952 0.256386C9.36581 0.107351 9.63145 0.110692 9.81393 0.264365L17.9521 7.11754C18.3088 7.41795 18.0964 8 17.63 8H17C16.7239 8 16.5 8.22386 16.5 8.5V17.5C16.5 17.7761 16.2761 18 16 18H12.5C12.2239 18 12 17.7761 12 17.5V14C12 13.7239 11.7761 13.5 11.5 13.5H7.5C7.22386 13.5 7 13.7239 7 14V17.5C7 17.7761 6.77614 18 6.5 18Z"
              fill="white"
            />
          </svg>
        </MenuOption>
      </Link>
      <Link href="/experience">
        <MenuOption>
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 18H1V11H8.5V12.2353H11.7V11H19V18Z"
              fill="white"
              stroke="white"
            />
            <path
              d="M8.5 9H1V4H5.37838H10H15.1081H19V9H11.7027V7.5H8.5V9Z"
              fill="white"
              stroke="white"
            />
            <path
              d="M5 3.57143V2C5 1.44772 5.44772 1 6 1H14C14.5523 1 15 1.44772 15 2V4"
              stroke="white"
            />
          </svg>
        </MenuOption>
      </Link>
      <Link href="/about">
        <MenuOption>
          <svg
            width="25"
            height="25"
            viewBox="0 0 6 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.784 2.992L3.096 0.159999H5.544L5.256 2.992H2.784ZM0.816 5.8L1.464 5.224H4.968L3.912 14.032H5.424L5.256 15.472L4.608 16H1.2L2.28 7.216H0.624L0.816 5.8Z"
              fill="white"
            />
          </svg>
        </MenuOption>
      </Link>
      <Link href="/contact">
        <MenuOption>
          <svg
            width="25"
            height="25"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1H16.5V12.5C16.5 13.0523 16.0523 13.5 15.5 13.5H1.5C0.947715 13.5 0.5 13.0523 0.5 12.5V1Z"
              fill="white"
            />
            <path
              d="M0.5 1H16.5M0.5 1L7.81606 7.85881C8.20072 8.21942 8.79928 8.21942 9.18394 7.8588L16.5 1M0.5 1V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H15.5C16.0523 13.5 16.5 13.0523 16.5 12.5V1"
              stroke="#b1c8fc"
            />
          </svg>
        </MenuOption>
      </Link>
      <Link href="https://medium.com/@aprillialee" passHref={true}>
        <MenuOptionImg2>
          <img src="/icons/medium.png" />
        </MenuOptionImg2>
      </Link>
      <Link href="https://github.com/aprillialee" passHref={true}>
        <MenuOptionImg>
          <img src="/icons/github.png" />
        </MenuOptionImg>
      </Link>
      <Link href="https://www.instagram.com/aprillialee/" passHref={true}>
        <MenuOption>
          <svg
            width="25"
            height="25"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.6"
              y="0.6"
              width="11.8"
              height="11.8"
              rx="3.4"
              stroke="white"
              strokeWidth="1.2"
            />
            <circle cx="6.5" cy="6.5" r="3" stroke="white" />
            <circle cx="9.75" cy="2.75" r="0.75" fill="white" />
          </svg>
        </MenuOption>
      </Link>
    </MenuOptionsStyled>
  );
}

const MenuOptionsStyled = styled.ul`
  width: 100px;
  height: 100vh;
  background: linear-gradient(#b0cafd, #7ab5f7);
  list-style: none;
  display: ${({ open }) => (open ? "" : "none")};
`;

const MenuOption = styled.li`
  padding-top: 20px;
  height: 80px;
  width: 100px;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const MenuOptionImg = styled.li`
  width: 25px;
  height: 25px;
  margin-bottom: 50px;
  cursor: pointer;
  padding-top: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuOptionImg2 = styled.li`
  width: 30px;
  height: 30px;
  margin-bottom: 50px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default MenuOptions;
