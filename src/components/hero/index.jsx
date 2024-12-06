import React from 'react'
import './Hero.css'
import HeroContactBtn from '../heroContactBtn'
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
import { rotateSlideIn } from '../../variants'
import { scaleFadeIn } from '../../variants'
import { bounceIn } from '../../variants'

const Hero = () => {
  return (
    <div className='heroMain'>

        <div className="heroLeft">
            <motion.p
                variants={rotateSlideIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >Where</motion.p>
            <motion.p
                variants={rotateSlideIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >Expertise</motion.p>
            <motion.p
                  variants={rotateSlideIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >Meets</motion.p>
            <motion.p
                  variants={rotateSlideIn('up', 0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >Innovation</motion.p>
        </div>

        <div className="heroRight">
            <motion.p
                variants={scaleFadeIn(0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >From initial strategy to final implementation, we offer a comprehensive suite of design services: product audits, go-to-market strategies, UX/UI design, visual storytelling, 3D animation, and beyond. Your boldest ideas deserve a team that can make them a reality. Let’s create something extraordinary together.</motion.p> 

            <div className="contactHero">
                <motion.div
                    variants={bounceIn(0.1)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
              <HeroContactBtn/>

                </motion.div>

                <motion.div
                    variants={fadeIn('up',0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
              <svg width="213" height="56" viewBox="0 0 213 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M88.9023 16.7578C89.5534 14.6484 90.3086 10.7943 91.168 5.19531C91.9883 5.19531 92.418 5.44922 92.457 5.95703C92.4701 6.11328 92.4766 6.22396 92.4766 6.28906C92.4896 6.35417 92.4701 6.58203 92.418 6.97266C92.3659 7.35026 92.2878 7.88411 92.1836 8.57422C92.0924 9.26432 91.9753 10.0651 91.832 10.9766C91.6888 11.888 91.526 12.8385 91.3438 13.8281C90.901 16.1589 90.4453 18.125 89.9766 19.7266C89.5078 20.0521 89.1432 20.1042 88.8828 19.8828C88.7656 19.7656 88.6615 19.6094 88.5703 19.4141C88.4792 19.2057 88.375 18.9714 88.2578 18.7109C88.0885 18.4896 87.776 17.9036 87.3203 16.9531C86.8646 16.0026 86.4935 15.2474 86.207 14.6875C85.9336 14.1276 85.6667 13.6068 85.4062 13.125C84.8073 12.0443 84.306 11.4128 83.9023 11.2305C83.4336 11.9596 82.6003 13.9583 81.4023 17.2266C81.194 17.7995 81.0052 18.3333 80.8359 18.8281C80.6667 19.3099 80.5234 19.7005 80.4062 20L79.1953 19.9414L74.3125 8.65234C74.2865 8.58724 74.2734 8.52214 74.2734 8.45703C74.2734 8.39193 74.293 8.32682 74.332 8.26172C74.3841 8.19661 74.4688 8.13802 74.5859 8.08594C74.8073 8.00781 75.0286 7.96875 75.25 7.96875C75.4714 7.96875 75.6276 8.01432 75.7188 8.10547C75.8229 8.18359 75.901 8.28776 75.9531 8.41797C76.0182 8.54818 76.0703 8.69141 76.1094 8.84766C76.1484 9.00391 76.2201 9.20573 76.3242 9.45312C76.4414 9.70052 76.6042 10.0651 76.8125 10.5469C77.0339 11.0286 77.2682 11.5365 77.5156 12.0703C77.763 12.6042 78.0104 13.138 78.2578 13.6719C78.5052 14.1927 78.7396 14.6745 78.9609 15.1172C79.4297 16.0938 79.7227 16.6406 79.8398 16.7578C81.3503 13.0339 82.2812 10.8268 82.6328 10.1367C82.9844 9.43359 83.2057 9.00391 83.2969 8.84766C83.4401 8.6263 83.5508 8.51562 83.6289 8.51562C84.1888 8.51562 85.1328 9.76562 86.4609 12.2656C86.8255 12.9297 87.1641 13.5677 87.4766 14.1797C88.2448 15.6641 88.7201 16.5234 88.9023 16.7578ZM97.3203 18.6328C98.4661 18.6328 100.191 18.112 102.496 17.0703C102.639 17.0703 102.757 17.1224 102.848 17.2266C102.939 17.3177 102.984 17.4284 102.984 17.5586C102.464 18.444 101.467 19.1341 99.9961 19.6289C98.5247 20.1237 97.151 20.2083 95.875 19.8828C94.4297 19.5052 93.5508 18.6914 93.2383 17.4414C93.2122 17.194 93.1992 16.862 93.1992 16.4453C93.1992 16.0286 93.3034 15.4818 93.5117 14.8047C93.7331 14.1146 94.1042 13.4635 94.625 12.8516C95.1458 12.2396 95.7578 11.7578 96.4609 11.4062C97.1641 11.0547 97.9128 10.8789 98.707 10.8789C99.4622 10.8789 100.309 11.1393 101.246 11.6602C101.689 11.9076 102.04 12.1875 102.301 12.5C102.561 12.8125 102.691 13.1315 102.691 13.457C102.691 13.5482 102.685 13.6393 102.672 13.7305C102.646 14.5247 102.262 15.026 101.52 15.2344C101.194 15.3255 100.816 15.3711 100.387 15.3711L97.5742 15.2539C96.6367 15.2539 95.9206 15.4557 95.4258 15.8594C95.1393 16.0807 94.9375 16.4128 94.8203 16.8555C95.1458 18.0404 95.9792 18.6328 97.3203 18.6328ZM100.797 12.5977C100.51 12.3893 100.211 12.2396 99.8984 12.1484C99.5859 12.0573 99.3255 12.0117 99.1172 12.0117C98.9089 12.0117 98.5703 12.0833 98.1016 12.2266C97.6328 12.3568 97.2161 12.5065 96.8516 12.6758C95.9531 13.0924 95.5039 13.5286 95.5039 13.9844C96.5456 14.0755 97.3268 14.1211 97.8477 14.1211C99.293 14.1211 100.27 13.9974 100.777 13.75C101.09 13.6198 101.246 13.457 101.246 13.2617C101.246 13.0273 101.096 12.806 100.797 12.5977ZM117.809 28.3594L117.535 28.3398C117.145 28.3398 116.728 28.3659 116.285 28.418H115.543C114.762 28.418 114.15 28.2682 113.707 27.9688C113.473 27.8125 113.355 27.5781 113.355 27.2656L117.848 27.0508C119.228 27.0117 119.918 26.2695 119.918 24.8242C119.918 24.7721 119.918 24.681 119.918 24.5508C119.918 24.4336 119.918 24.1667 119.918 23.75L120.016 17.4609C120.016 17.2396 120.009 17.0573 119.996 16.9141C117.887 18.8802 115.855 19.8633 113.902 19.8633C113.733 19.8633 113.564 19.8568 113.395 19.8438C112.522 19.8438 112.086 19.4596 112.086 18.6914C112.112 18.0924 112.288 17.4349 112.613 16.7188C112.939 15.9896 113.355 15.293 113.863 14.6289C114.384 13.9518 114.97 13.3464 115.621 12.8125C116.624 11.9922 117.594 11.582 118.531 11.582C119.625 11.582 120.523 12.1615 121.227 13.3203C121.435 16.4193 121.539 18.6198 121.539 19.9219C121.539 21.224 121.52 22.2917 121.48 23.125C121.441 23.9583 121.35 24.7201 121.207 25.4102C121.077 26.1003 120.901 26.6471 120.68 27.0508C120.458 27.4544 120.198 27.7474 119.898 27.9297C119.404 28.2161 118.707 28.3594 117.809 28.3594ZM118.98 13.0078C118.824 12.9557 118.603 12.9297 118.316 12.9297C118.043 12.9297 117.685 13.0469 117.242 13.2812C116.799 13.5156 116.376 13.8216 115.973 14.1992C115.569 14.5638 115.191 14.974 114.84 15.4297C113.98 16.5495 113.551 17.4414 113.551 18.1055C113.551 18.3138 113.609 18.4701 113.727 18.5742C113.818 18.6263 113.928 18.6523 114.059 18.6523C114.202 18.6523 114.404 18.6328 114.664 18.5938C114.924 18.5417 115.276 18.4245 115.719 18.2422C116.174 18.0469 116.643 17.7995 117.125 17.5C117.607 17.2005 118.043 16.8685 118.434 16.5039C119.345 15.6706 119.801 14.8568 119.801 14.0625C119.801 13.5807 119.527 13.2292 118.98 13.0078ZM126.461 18.6328C127.607 18.6328 129.332 18.112 131.637 17.0703C131.78 17.0703 131.897 17.1224 131.988 17.2266C132.079 17.3177 132.125 17.4284 132.125 17.5586C131.604 18.444 130.608 19.1341 129.137 19.6289C127.665 20.1237 126.292 20.2083 125.016 19.8828C123.57 19.5052 122.691 18.6914 122.379 17.4414C122.353 17.194 122.34 16.862 122.34 16.4453C122.34 16.0286 122.444 15.4818 122.652 14.8047C122.874 14.1146 123.245 13.4635 123.766 12.8516C124.286 12.2396 124.898 11.7578 125.602 11.4062C126.305 11.0547 127.053 10.8789 127.848 10.8789C128.603 10.8789 129.449 11.1393 130.387 11.6602C130.829 11.9076 131.181 12.1875 131.441 12.5C131.702 12.8125 131.832 13.1315 131.832 13.457C131.832 13.5482 131.826 13.6393 131.812 13.7305C131.786 14.5247 131.402 15.026 130.66 15.2344C130.335 15.3255 129.957 15.3711 129.527 15.3711L126.715 15.2539C125.777 15.2539 125.061 15.4557 124.566 15.8594C124.28 16.0807 124.078 16.4128 123.961 16.8555C124.286 18.0404 125.12 18.6328 126.461 18.6328ZM129.938 12.5977C129.651 12.3893 129.352 12.2396 129.039 12.1484C128.727 12.0573 128.466 12.0117 128.258 12.0117C128.049 12.0117 127.711 12.0833 127.242 12.2266C126.773 12.3568 126.357 12.5065 125.992 12.6758C125.094 13.0924 124.645 13.5286 124.645 13.9844C125.686 14.0755 126.467 14.1211 126.988 14.1211C128.434 14.1211 129.41 13.9974 129.918 13.75C130.23 13.6198 130.387 13.457 130.387 13.2617C130.387 13.0273 130.237 12.806 129.938 12.5977ZM136.246 18.125L136.285 15C136.285 14.5052 136.24 14.082 136.148 13.7305H133.121L133.082 12.3828H136.012V7.34375C136.051 7.22656 136.129 7.10938 136.246 6.99219C136.428 6.8099 136.578 6.71875 136.695 6.71875C136.826 6.71875 136.936 6.73177 137.027 6.75781C137.118 6.78385 137.216 6.875 137.32 7.03125C137.529 7.89062 137.633 9.1862 137.633 10.918C137.633 11.3477 137.652 11.7708 137.691 12.1875C138.108 12.1354 138.525 12.1094 138.941 12.1094C138.941 12.1094 139.28 12.1094 139.957 12.1094C140.204 12.1094 140.432 12.0964 140.641 12.0703L140.582 13.4766L137.73 13.3984L137.828 20.1367C137.594 20.2409 137.392 20.293 137.223 20.293C136.572 20.293 136.246 19.5703 136.246 18.125ZM74.6445 36.6719L74.5859 34.1523C74.5859 33.944 74.6576 33.7812 74.8008 33.6641C74.944 33.5469 75.1198 33.4883 75.3281 33.4883C75.5365 33.4883 75.7253 33.5469 75.8945 33.6641C76.0638 33.7682 76.1289 33.918 76.0898 34.1133L76.2266 42.5508C77.0469 41.457 78.1536 40.5391 79.5469 39.7969C80.7057 39.1719 81.7214 38.8594 82.5938 38.8594C83.362 38.8594 83.9544 39.1068 84.3711 39.6016C84.6836 39.9922 84.8398 40.513 84.8398 41.1641C84.8398 41.8021 84.7161 42.362 84.4688 42.8438C84.2344 43.3125 83.9219 43.7682 83.5312 44.2109C83.1406 44.6406 82.6914 45.0443 82.1836 45.4219C81.6758 45.7995 81.1615 46.138 80.6406 46.4375C79.651 47.0104 78.6745 47.4857 77.7109 47.8633C77.6328 47.8372 77.5026 47.8307 77.3203 47.8438C77.138 47.8568 76.9167 47.8633 76.6562 47.8633C75.9531 47.8633 75.3346 47.7786 74.8008 47.6094C74.6706 46.3724 74.6055 44.4909 74.6055 41.9648L74.6445 36.6719ZM76.2852 46.2617C76.2852 46.4049 76.4154 46.4766 76.6758 46.4766C76.9492 46.4766 77.2812 46.4245 77.6719 46.3203C78.0625 46.2161 78.5312 46.0404 79.0781 45.793C79.638 45.5326 80.1979 45.2005 80.7578 44.7969C82.0599 43.8724 83.043 42.7852 83.707 41.5352C83.5378 40.793 83.0299 40.4219 82.1836 40.4219C81.4154 40.4219 80.5495 40.7083 79.5859 41.2812C78.2188 42.1016 77.2422 43.1172 76.6562 44.3281C76.4089 44.8099 76.2852 45.2982 76.2852 45.793C76.2852 45.9232 76.2852 46.0273 76.2852 46.1055C76.2852 46.1836 76.2852 46.2357 76.2852 46.2617ZM86.2461 44.2891C86.2461 42.7526 86.9102 41.5156 88.2383 40.5781C89.293 39.8359 90.5625 39.3867 92.0469 39.2305C92.125 39.2305 92.3073 39.2305 92.5938 39.2305C92.8802 39.2305 93.2643 39.3151 93.7461 39.4844C94.8138 39.849 95.543 40.4935 95.9336 41.418C96.0898 41.7826 96.168 42.0951 96.168 42.3555C96.168 42.6029 96.1615 42.7786 96.1484 42.8828C96.1484 44.5104 95.5299 45.793 94.293 46.7305C93.1471 47.5898 91.7148 48.0195 89.9961 48.0195C88.7591 48.0195 87.8216 47.7331 87.1836 47.1602C86.5586 46.5872 86.2461 45.6302 86.2461 44.2891ZM87.5938 44.7578C87.5938 45.5651 87.8086 46.112 88.2383 46.3984C88.5638 46.6068 89.1107 46.7109 89.8789 46.7109C90.6471 46.7109 91.3242 46.6523 91.9102 46.5352C92.4961 46.418 93.0169 46.2161 93.4727 45.9297C94.4492 45.3047 94.9375 44.3346 94.9375 43.0195C94.9375 42.2383 94.7292 41.6003 94.3125 41.1055C93.8568 40.5716 93.2578 40.3047 92.5156 40.3047C92.0078 40.3958 91.4935 40.4935 90.9727 40.5977C90.4648 40.7018 89.9831 40.9036 89.5273 41.2031C88.5378 41.8411 87.8932 43.026 87.5938 44.7578ZM97.4961 44.2891C97.4961 42.7526 98.1602 41.5156 99.4883 40.5781C100.543 39.8359 101.812 39.3867 103.297 39.2305C103.375 39.2305 103.557 39.2305 103.844 39.2305C104.13 39.2305 104.514 39.3151 104.996 39.4844C106.064 39.849 106.793 40.4935 107.184 41.418C107.34 41.7826 107.418 42.0951 107.418 42.3555C107.418 42.6029 107.411 42.7786 107.398 42.8828C107.398 44.5104 106.78 45.793 105.543 46.7305C104.397 47.5898 102.965 48.0195 101.246 48.0195C100.009 48.0195 99.0716 47.7331 98.4336 47.1602C97.8086 46.5872 97.4961 45.6302 97.4961 44.2891ZM98.8438 44.7578C98.8438 45.5651 99.0586 46.112 99.4883 46.3984C99.8138 46.6068 100.361 46.7109 101.129 46.7109C101.897 46.7109 102.574 46.6523 103.16 46.5352C103.746 46.418 104.267 46.2161 104.723 45.9297C105.699 45.3047 106.188 44.3346 106.188 43.0195C106.188 42.2383 105.979 41.6003 105.562 41.1055C105.107 40.5716 104.508 40.3047 103.766 40.3047C103.258 40.3958 102.743 40.4935 102.223 40.5977C101.715 40.7018 101.233 40.9036 100.777 41.2031C99.7878 41.8411 99.1432 43.026 98.8438 44.7578ZM110.191 44.4453L110.289 46.1445C110.289 47.1862 110.042 47.8177 109.547 48.0391C109.443 48.0781 109.319 48.0977 109.176 48.0977C109.033 48.0977 108.863 48.0651 108.668 48L108.688 40.6953C108.688 39.6406 108.622 38.5859 108.492 37.5312C108.375 36.4635 108.316 35.4023 108.316 34.3477C108.316 33.931 108.538 33.7227 108.98 33.7227H109.137C109.228 33.7227 109.286 33.7292 109.312 33.7422C109.508 34.5495 109.638 35.526 109.703 36.6719C109.846 39.2109 109.977 40.9167 110.094 41.7891C110.315 41.6719 110.81 41.3398 111.578 40.793C112.346 40.2461 112.965 39.8099 113.434 39.4844C113.902 39.1458 114.345 38.8333 114.762 38.5469C115.738 37.9089 116.35 37.5898 116.598 37.5898C116.806 37.5898 116.969 37.7135 117.086 37.9609C116.435 38.7812 115.387 39.6927 113.941 40.6953C113.355 41.099 112.77 41.5026 112.184 41.9062C111.611 42.2969 111.083 42.707 110.602 43.1367C111.474 43.3711 112.301 43.6185 113.082 43.8789C113.863 44.1263 114.618 44.3542 115.348 44.5625C117.027 45.0573 118.473 45.3372 119.684 45.4023C119.684 45.7539 119.651 45.9818 119.586 46.0859C119.469 46.2682 119.228 46.3724 118.863 46.3984H118.707C117.913 46.1771 116.858 45.9297 115.543 45.6562C112.952 45.1224 111.168 44.7188 110.191 44.4453ZM124.527 46.6328C125.673 46.6328 127.398 46.112 129.703 45.0703C129.846 45.0703 129.964 45.1224 130.055 45.2266C130.146 45.3177 130.191 45.4284 130.191 45.5586C129.671 46.444 128.674 47.1341 127.203 47.6289C125.732 48.1237 124.358 48.2083 123.082 47.8828C121.637 47.5052 120.758 46.6914 120.445 45.4414C120.419 45.194 120.406 44.862 120.406 44.4453C120.406 44.0286 120.51 43.4818 120.719 42.8047C120.94 42.1146 121.311 41.4635 121.832 40.8516C122.353 40.2396 122.965 39.7578 123.668 39.4062C124.371 39.0547 125.12 38.8789 125.914 38.8789C126.669 38.8789 127.516 39.1393 128.453 39.6602C128.896 39.9076 129.247 40.1875 129.508 40.5C129.768 40.8125 129.898 41.1315 129.898 41.457C129.898 41.5482 129.892 41.6393 129.879 41.7305C129.853 42.5247 129.469 43.026 128.727 43.2344C128.401 43.3255 128.023 43.3711 127.594 43.3711L124.781 43.2539C123.844 43.2539 123.128 43.4557 122.633 43.8594C122.346 44.0807 122.145 44.4128 122.027 44.8555C122.353 46.0404 123.186 46.6328 124.527 46.6328ZM128.004 40.5977C127.717 40.3893 127.418 40.2396 127.105 40.1484C126.793 40.0573 126.533 40.0117 126.324 40.0117C126.116 40.0117 125.777 40.0833 125.309 40.2266C124.84 40.3568 124.423 40.5065 124.059 40.6758C123.16 41.0924 122.711 41.5286 122.711 41.9844C123.753 42.0755 124.534 42.1211 125.055 42.1211C126.5 42.1211 127.477 41.9974 127.984 41.75C128.297 41.6198 128.453 41.457 128.453 41.2617C128.453 41.0273 128.303 40.806 128.004 40.5977ZM140.602 32.3164C140.602 33.5664 140.562 34.7904 140.484 35.9883C140.419 37.1732 140.354 38.3385 140.289 39.4844C140.237 40.6172 140.211 41.8281 140.211 43.1172C140.211 44.3932 140.302 45.7474 140.484 47.1797C140.484 47.4792 140.426 47.694 140.309 47.8242C140.204 47.9544 140.022 48.0195 139.762 48.0195C139.15 48.0195 138.844 47.5117 138.844 46.4961V45.8516C136.995 47.2318 135.432 47.9219 134.156 47.9219C133.648 47.9219 133.128 47.7982 132.594 47.5508C132.073 47.3034 131.578 46.8021 131.109 46.0469C131.044 45.7344 131.012 45.4154 131.012 45.0898C131.012 44.7643 131.07 44.3737 131.188 43.918C131.318 43.4492 131.572 42.9674 131.949 42.4727C132.34 41.9779 132.809 41.5417 133.355 41.1641C134.553 40.3568 135.849 39.9531 137.242 39.9531C137.841 39.9531 138.414 40.0443 138.961 40.2266C138.961 39.9922 138.974 39.582 139 38.9961C139.039 38.4102 139.078 37.7917 139.117 37.1406C139.195 35.4479 139.247 34.4518 139.273 34.1523C139.299 33.8398 139.332 33.5794 139.371 33.3711C139.423 33.1497 139.495 32.9609 139.586 32.8047C139.781 32.4792 140.12 32.3164 140.602 32.3164ZM132.438 44.9336C132.438 45.9622 132.809 46.4766 133.551 46.4766C133.668 46.4766 133.798 46.4635 133.941 46.4375C134.475 46.4375 135.133 46.2812 135.914 45.9688C137.398 45.3828 138.303 44.875 138.629 44.4453V41.8477C138.629 41.3919 138.258 41.1641 137.516 41.1641C137.424 41.151 137.301 41.1445 137.145 41.1445C137.001 41.1445 136.773 41.1771 136.461 41.2422C136.148 41.3073 135.797 41.4245 135.406 41.5938C135.016 41.763 134.632 41.9714 134.254 42.2188C133.46 42.7526 132.913 43.3776 132.613 44.0938C132.496 44.3672 132.438 44.6471 132.438 44.9336ZM160.836 41.4766C160.901 41.4766 160.934 41.6523 160.934 42.0039C160.934 42.3555 160.947 42.5964 160.973 42.7266L154.273 43.5469L154.625 47.8828L153.043 47.8047C153.043 46.6328 152.913 45.2917 152.652 43.7812L150.113 44.7578C149.944 44.7578 149.801 44.6602 149.684 44.4648C149.475 44.1263 149.371 43.8203 149.371 43.5469L152.34 42.4922C152.079 40.2526 151.949 38.4362 151.949 37.043C151.949 35.6367 152.066 34.543 152.301 33.7617C152.535 32.9805 152.874 32.4596 153.316 32.1992C153.772 31.9258 154.254 31.7891 154.762 31.7891C155.27 31.7891 155.784 31.8997 156.305 32.1211C156.839 32.3424 157.346 32.6224 157.828 32.9609C158.31 33.2995 158.72 33.6836 159.059 34.1133C159.397 34.5299 159.566 34.9401 159.566 35.3438C159.566 35.6562 159.534 35.8776 159.469 36.0078C158.948 35.2786 158.316 34.6276 157.574 34.0547C156.689 33.3776 155.855 33.0391 155.074 33.0391C154.332 33.0391 153.837 33.5664 153.59 34.6211C153.473 35.168 153.414 35.9427 153.414 36.9453C153.414 37.9349 153.44 38.8464 153.492 39.6797C153.544 40.5 153.701 41.3268 153.961 42.1602C154.768 42.1602 155.673 42.0885 156.676 41.9453C158.603 41.6458 159.99 41.4896 160.836 41.4766ZM169.176 44.7578C168.199 46.2943 166.897 47.2448 165.27 47.6094C164.892 47.6875 164.547 47.7266 164.234 47.7266C163.935 47.7266 163.681 47.7266 163.473 47.7266C163.277 47.7135 163.056 47.681 162.809 47.6289C162.561 47.5768 162.333 47.4922 162.125 47.375C161.643 47.1016 161.402 46.7174 161.402 46.2227C161.35 45.9883 161.324 45.7279 161.324 45.4414C161.324 45.1419 161.389 44.7513 161.52 44.2695C161.65 43.7878 161.884 43.2669 162.223 42.707C162.574 42.1471 162.997 41.6328 163.492 41.1641C164.521 40.1745 165.634 39.5365 166.832 39.25C167.184 39.1719 167.503 39.1328 167.789 39.1328C168.089 39.1328 168.355 39.1523 168.59 39.1914C169.345 39.1914 169.853 39.7057 170.113 40.7344C170.283 41.3854 170.38 42.2969 170.406 43.4688C170.445 44.6276 170.478 45.526 170.504 46.1641C170.543 46.7891 170.628 47.362 170.758 47.8828H169.605C169.553 47.5312 169.514 47.2188 169.488 46.9453C169.462 46.6719 169.436 46.418 169.41 46.1836C169.345 45.6367 169.267 45.1615 169.176 44.7578ZM169.098 41.7305C169.098 40.9753 168.727 40.5977 167.984 40.5977C167.893 40.5846 167.802 40.5781 167.711 40.5781C166.76 40.5781 165.758 41.0339 164.703 41.9453C164.208 42.362 163.785 42.8307 163.434 43.3516C162.913 44.0938 162.652 44.7578 162.652 45.3438C162.652 46.112 163.095 46.5677 163.98 46.7109C165.152 46.6849 166.272 46.151 167.34 45.1094C167.796 44.6536 168.173 44.1589 168.473 43.625C168.889 42.9089 169.098 42.2773 169.098 41.7305ZM178.355 42.9609C179.788 42.9609 180.504 43.3255 180.504 44.0547C180.504 44.6016 180.107 45.2396 179.312 45.9688C178.128 47.0495 176.533 47.9154 174.527 48.5664C174.436 48.5664 174.332 48.4753 174.215 48.293C174.111 48.1107 174.026 47.974 173.961 47.8828C173.909 47.7786 173.87 47.7135 173.844 47.6875C175.341 47.1927 176.572 46.5938 177.535 45.8906C178.186 45.4219 178.512 45.0378 178.512 44.7383C178.512 44.4388 178.128 44.2891 177.359 44.2891C176.591 44.2891 175.465 44.4714 173.98 44.8359C173.303 44.8099 172.717 44.569 172.223 44.1133C171.793 43.7096 171.578 43.306 171.578 42.9023C171.578 42.4857 171.695 42.1081 171.93 41.7695C172.164 41.418 172.477 41.0924 172.867 40.793C173.258 40.4935 173.714 40.2201 174.234 39.9727C175.51 39.3607 176.832 39.0547 178.199 39.0547C178.603 39.0547 178.993 39.0938 179.371 39.1719C179.684 39.1719 179.866 39.3086 179.918 39.582C179.97 39.8555 179.996 40.3047 179.996 40.9297C179.228 40.5781 178.362 40.4023 177.398 40.4023C176.201 40.4023 175.211 40.6432 174.43 41.125C173.622 41.5938 173.206 42.2057 173.18 42.9609C173.18 43.3255 173.447 43.5078 173.98 43.5078L175.406 43.3516C176.63 43.0911 177.613 42.9609 178.355 42.9609ZM184.664 46.125L184.703 43C184.703 42.5052 184.658 42.082 184.566 41.7305H181.539L181.5 40.3828H184.43V35.3438C184.469 35.2266 184.547 35.1094 184.664 34.9922C184.846 34.8099 184.996 34.7188 185.113 34.7188C185.243 34.7188 185.354 34.7318 185.445 34.7578C185.536 34.7839 185.634 34.875 185.738 35.0312C185.947 35.8906 186.051 37.1862 186.051 38.918C186.051 39.3477 186.07 39.7708 186.109 40.1875C186.526 40.1354 186.943 40.1094 187.359 40.1094C187.359 40.1094 187.698 40.1094 188.375 40.1094C188.622 40.1094 188.85 40.0964 189.059 40.0703L189 41.4766L186.148 41.3984L186.246 48.1367C186.012 48.2409 185.81 48.293 185.641 48.293C184.99 48.293 184.664 47.5703 184.664 46.125Z" fill="#665F82"/>
<path d="M189.273 49.4H209.273V29.4H189.273V49.4Z" fill="url(#pattern0)"/>
<path d="M3.14135 25.7302C3.14135 25.7302 15.1952 38.4153 30.7598 40.5C46.3243 42.5847 57.2622 33.339 57.2622 33.339M3.14135 25.7302C3.14135 25.7302 7.76256 28.2885 13.1024 26.0907M3.14135 25.7302C3.14135 25.7302 6.10199 30.7561 6.46014 35.9611" stroke="#665F82" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_11576_64694" transform="scale(0.00625)"/>
</pattern>

</defs>
</svg>
</motion.div>


            </div>
        </div>

        
      
    </div>
  )
}

export default Hero