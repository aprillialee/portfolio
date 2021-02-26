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
      <Link href="https://medium.com/@aprillialee" passHref={true}>
        <MenuOption>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            fill="white"
            viewBox="0 0 511.626 511.627"
            strokeWidth="10"
          >
            <g>
              <path
                d="M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41
		c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269
		c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7
		c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283
		c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574
		c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854
		c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429
		c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283
		c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789
		C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529
		c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852
		c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27
		c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803
		c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845
		c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z"
              />
            </g>
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
  height: 80px;
  width: 100px;
  cursor: pointer;
`;

const MenuOptionImg = styled.li`
  width: 25px;
  height: 25px;
  margin-bottom: 50px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default MenuOptions;
