import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Images = ({ image1, image2, image3 }) => {
  return (
    <div>
      {/* {JSON.stringify(image2)} */}
      <table style={{ width: '100vw' }}>
        <tbody>
          <tr>
            <td colSpan="2">
              <Image
                css={css`
                  * {
                    width: 100%;
                  }
                `}
                fluid={image1.sharp.fluid}
                alt="image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Image
                css={css`
                  * {
                    width: 50%;
                  }
                `}
                fluid={image2.sharp.fluid}
                alt="image"
              />
            </td>
            <td>
              <Image
                css={css`
                  * {
                    width: 50%;
                  }
                `}
                fluid={image3.sharp.fluid}
                alt="image"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Images;
