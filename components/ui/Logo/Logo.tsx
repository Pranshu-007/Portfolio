"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LOGO_LOAD_DELAY, LOGO_LOAD_DURATION } from '@/utils/timing';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  transitionDuration?: number;
  startDelay?: number;
  href?: string;
}

const handleScrollReset = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  window.scrollTo(0, 0);
  window.location.hash = '';
}

const Logo = ({ width = 40, height = 40, transitionDuration = LOGO_LOAD_DURATION, startDelay = LOGO_LOAD_DELAY, href = '/' }: LogoProps) => (
  <Link aria-label='Portfolio Icon' href={href} onClick={handleScrollReset}>
    <motion.svg
      className="text-foreground hover:text-foreground_secondary transition-colors duration-300"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="65 100 85 40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: transitionDuration, ease: "easeInOut", delay: startDelay }}
    >
      <motion.path
        initial={{ translateX: '-20px', translateY: 0 }}
        animate={{ translateX: 0, translateY: 0 }}
        transition={{ duration: transitionDuration, ease: "easeInOut", delay: transitionDuration + startDelay - 0.1 }}
        fill="currentColor"
        d="m 117.81009,151.99519 c -7.97522,-1.18235 -13.44111,-3.22067 -19.686438,-7.34141 -0.855112,-0.56421 -0.978364,-0.41046 5.801898,-7.23751 l 2.53675,-2.55427 1.622,1.05756 c 8.65038,5.64013 23.85548,6.67806 23.85548,1.62843 0,-2.56194 -1.49155,-3.27457 -11.4261,-5.45922 -9.41635,-2.0707 -13.30404,-3.63441 -16.53136,-6.64927 -3.01209,-2.81379 -3.77836,-4.91247 -3.55266,-9.73007 0.13616,-2.90635 0.35434,-3.77292 1.46602,-5.82269 2.30824,-4.25605 6.9906,-7.32714 13.42093,-8.80257 4.26782,-0.97925 12.76655,-0.80194 17.98976,0.37533 3.78804,0.85378 9.81544,3.245 12.33178,4.89232 l 1.0232,0.66984 -1.74569,2.09748 c -0.96013,1.15363 -2.72965,3.34552 -3.93226,4.87088 -1.20261,1.52536 -2.30771,2.77885 -2.45578,2.78553 -0.14806,0.007 -1.48896,-0.62874 -2.97977,-1.41206 -3.25629,-1.71095 -6.70898,-2.76208 -10.66777,-3.24766 -5.17735,-0.63507 -8.31673,0.58839 -8.31673,3.24112 0,2.26126 1.68223,3.06317 10.49792,5.00428 10.31896,2.27212 14.76078,4.06473 17.87917,7.21559 4.68693,4.73572 3.9981,14.24059 -1.37659,18.99512 -4.34348,3.8423 -9.44735,5.4539 -17.85776,5.63878 -3.08568,0.0678 -6.63888,-0.0292 -7.896,-0.21553 z M 60.875743,126.4999 v -25.16742 l 14.649165,0.006 c 15.915318,0.007 18.118012,0.20054 22.759632,2.00211 1.367741,0.53086 2.4868,1.03478 2.4868,1.11982 0,0.085 -0.47026,0.68783 -1.045019,1.33956 -1.520388,1.72398 -3.026439,5.16804 -3.559639,8.14025 -0.570175,3.17829 -0.02024,6.9489 1.420994,9.74326 1.147007,2.22387 3.833934,5.14062 5.653414,6.13697 0.69875,0.38263 1.27046,0.90884 1.27046,1.16933 0,0.70617 -2.89311,2.55446 -5.881618,3.75754 -4.399026,1.77091 -7.050571,2.21249 -14.577058,2.42758 l -6.952356,0.19868 -0.112489,7.04913 -0.112489,7.04912 -7.999899,0.0976 -7.999898,0.0976 z m 27.096084,-0.76913 c 5.538261,-1.01082 7.863447,-6.63213 4.270757,-10.32486 -1.700163,-1.74751 -3.91904,-2.3084 -9.860621,-2.4926 l -5.298634,-0.16427 v 6.45222 c 0,3.54873 0.124674,6.56005 0.277054,6.69184 0.452475,0.39133 8.229806,0.27236 10.611444,-0.16233 z"
      />
    </motion.svg>
  </Link>
);

export default Logo;
