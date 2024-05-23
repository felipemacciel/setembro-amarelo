import * as React from 'react';
import { SVGAttributes } from 'react';

interface ChevroRightProps extends SVGAttributes<HTMLOrSVGElement> { }

export default function Plus(props: ChevroRightProps): JSX.Element {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <mask id="mask0_4201_2861" style={{ maskType:'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0"
                              width="20" height="20">
                              <rect width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_4201_2861)">
                              <path
                                  d="M9.83325 12.6875C9.55547 12.9653 9.23603 13.0312 8.87492 12.8854C8.51381 12.7396 8.33325 12.4653 8.33325 12.0625V7.95832C8.33325 7.56943 8.51381 7.30207 8.87492 7.15624C9.23603 7.01041 9.55547 7.07638 9.83325 7.35416L11.8749 9.39582C11.9583 9.47916 12.0242 9.57638 12.0728 9.68749C12.1214 9.7986 12.1458 9.90971 12.1458 10.0208C12.1458 10.1319 12.1214 10.243 12.0728 10.3542C12.0242 10.4653 11.9583 10.5625 11.8749 10.6458L9.83325 12.6875Z"
                                  fill="#B9466B" />
                          </g>
                      </svg>


    )
}




