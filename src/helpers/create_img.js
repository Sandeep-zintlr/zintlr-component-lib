import { isBrowser } from './isBrowser';

export const imageColors = {
  faint_blue: {
    bgColor: '#EFEFFF',
    textColor: 'black',
  },
};
/**
 * This function will the user's browser using userAgent
 * @returns {string} Browser name
 */
function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox';
  } else if (userAgent.match(/safari/i)) {
    browserName = 'safari';
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'opera';
  } else if (userAgent.match(/edg/i)) {
    browserName = 'edge';
  } else {
    browserName = 'No browser detection';
  }

  return browserName;
}

/**
 * SVG image representing a default logo with placeholders for initials.
 */
const logo_img = `
<g clip-path="url(#0cf21cfe8e)" transform="translate(5, 20) scale(0.5)">
<path fill="#ffffff" d="M 238.238281 215.71875 C 255.039062 215.71875 270.484375 215.71875 285.882812 215.570312 C 286.886719 215.328125 287.800781 214.894531 288.625 214.265625 C 289.445312 213.636719 290.101562 212.863281 290.59375 211.953125 C 299.421875 196.890625 308.148438 181.828125 316.625 166.765625 C 317.03125 165.753906 317.234375 164.703125 317.234375 163.613281 C 317.234375 162.523438 317.03125 161.472656 316.625 160.464844 C 315.144531 157.265625 313.421875 154.203125 311.457031 151.273438 C 310.230469 153.007812 309.175781 154.238281 308.375 155.617188 C 300.523438 169.425781 292.5 183.234375 284.980469 197.140625 C 282.472656 201.761719 279.585938 203.820312 274.347656 203.191406 C 270.242188 202.960938 266.140625 202.960938 262.035156 203.191406 C 278.382812 174.09375 294.382812 145.828125 310.957031 116.703125 C 319.984375 132.296875 328.507812 146.832031 336.757812 161.59375 C 337.011719 162.59375 337.054688 163.601562 336.882812 164.621094 C 336.714844 165.640625 336.347656 166.578125 335.78125 167.441406 C 324.261719 187.675781 312.621094 207.84375 300.851562 227.945312 C 300.253906 229.003906 299.464844 229.890625 298.484375 230.609375 C 297.503906 231.328125 296.421875 231.8125 295.234375 232.0625 C 266.898438 232.339844 238.566406 232.265625 208.976562 232.265625 C 213.664062 224.003906 217.828125 216.523438 222.117188 209.117188 C 241.046875 176.304688 259.804688 143.316406 279.136719 110.855469 C 282.773438 104.730469 283.425781 100.109375 278.910156 94.738281 C 277.597656 92.972656 276.402344 91.132812 275.324219 89.214844 L 183.777344 248.082031 L 289.265625 248.082031 C 283.675781 257.769531 278.785156 266.558594 273.644531 275.269531 C 269.910156 281.644531 267.402344 290.332031 261.808594 293.546875 C 256.21875 296.757812 247.441406 294.652344 240.070312 294.675781 L 101.679688 294.675781 C 148.996094 212.730469 195.710938 131.792969 243.027344 49.773438 L 131.972656 49.773438 C 120.035156 49.773438 120.035156 49.773438 115.171875 61.75 L 219.960938 61.75 L 98.722656 272.15625 C 89.71875 256.515625 81.167969 242.03125 72.96875 227.09375 C 72.609375 225.941406 72.496094 224.765625 72.636719 223.566406 C 72.777344 222.367188 73.15625 221.25 73.773438 220.214844 C 93.011719 186.574219 112.347656 153 131.769531 119.492188 C 133.125 117.132812 134.277344 114.695312 136.109375 111.507812 C 119.632812 111.507812 104.214844 111.507812 88.792969 111.632812 C 87.761719 111.773438 86.804688 112.121094 85.929688 112.683594 C 85.050781 113.246094 84.335938 113.96875 83.777344 114.847656 C 74.851562 130.011719 66.058594 145.273438 57.398438 160.640625 C 57.019531 161.558594 56.828125 162.519531 56.828125 163.511719 C 56.828125 164.507812 57.019531 165.46875 57.398438 166.386719 C 59.101562 169.855469 61.015625 173.203125 63.140625 176.429688 C 66 171.410156 68.480469 167.390625 70.863281 163.175781 C 77.234375 152.027344 83.800781 140.980469 89.769531 129.609375 C 89.945312 129.164062 90.15625 128.738281 90.40625 128.328125 C 90.65625 127.917969 90.9375 127.535156 91.25 127.175781 C 91.566406 126.816406 91.910156 126.484375 92.28125 126.183594 C 92.652344 125.882812 93.046875 125.617188 93.464844 125.382812 C 93.882812 125.148438 94.316406 124.953125 94.765625 124.796875 C 95.21875 124.636719 95.679688 124.519531 96.152344 124.441406 C 96.621094 124.363281 97.097656 124.324219 97.574219 124.328125 C 98.054688 124.332031 98.527344 124.378906 98.996094 124.460938 C 103.035156 124.789062 107.121094 124.460938 112.210938 124.460938 C 95.613281 153.359375 79.742188 181.527344 63.242188 210.597656 C 55.71875 197.441406 48.972656 184.816406 41.226562 172.941406 C 36.8125 166.210938 36.886719 161.34375 41.226562 154.464844 C 52.332031 136.539062 62.539062 118.035156 73.046875 99.660156 C 73.40625 98.839844 73.882812 98.101562 74.476562 97.433594 C 75.070312 96.765625 75.75 96.207031 76.519531 95.757812 C 77.292969 95.308594 78.113281 94.984375 78.984375 94.792969 C 79.855469 94.601562 80.734375 94.550781 81.621094 94.636719 C 109.054688 94.886719 136.511719 94.761719 165.296875 94.761719 C 163.617188 97.953125 162.4375 100.363281 161.109375 102.671875 C 139.792969 139.625 118.882812 176.832031 96.890625 213.359375 C 91.148438 222.875 91.199219 229.726562 99.398438 237.613281 C 129.464844 185.015625 159.703125 132.519531 190.496094 79.070312 L 85.582031 79.070312 C 86.636719 76.761719 87.210938 75.230469 88.089844 73.824219 C 95.210938 61.273438 102.28125 48.84375 109.703125 36.542969 C 110.363281 35.5625 111.191406 34.761719 112.191406 34.140625 C 113.195312 33.519531 114.277344 33.132812 115.445312 32.980469 C 166.902344 32.792969 218.355469 32.753906 269.808594 32.851562 C 270.554688 32.957031 271.289062 33.109375 272.015625 33.304688 C 225.101562 114.671875 178.359375 195.710938 130.96875 277.753906 L 242.527344 277.753906 C 254.238281 277.753906 254.636719 277.453125 259.078125 265.203125 L 154.4375 265.203125 L 275.148438 55.625 C 276.265625 57.027344 277.3125 58.484375 278.285156 59.992188 C 285.605469 72.542969 292.753906 85.324219 300.273438 97.824219 C 300.796875 98.542969 301.195312 99.320312 301.472656 100.164062 C 301.746094 101.007812 301.882812 101.871094 301.882812 102.757812 C 301.882812 103.644531 301.746094 104.511719 301.472656 105.355469 C 301.195312 106.195312 300.796875 106.976562 300.273438 107.691406 C 280.566406 141.484375 260.972656 175.402344 241.5 209.445312 C 240.546875 211.101562 239.742188 212.808594 238.238281 215.71875 Z M 238.238281 215.71875 " fill-opacity="1" fill-rule="nonzero" />
</g>`;

/**
 * Function to generate the SVG image based on initials.
 * @param {string} initials - The initials to be displayed in the SVG image.
 * @param {string?} imageColor - If null, default gradient black will be used as background
 * @returns {SVGElement} - The SVG image element with provided initials or the custom logo if no initials are provided.
 */
const get_svg = (initials, imageColor = null) => {
  let xmlns = 'http://www.w3.org/2000/svg';
  let svg = document.createElementNS(xmlns, 'svg');
  svg.setAttributeNS(null, 'width', '200');
  svg.setAttributeNS(null, 'height', '200');
  svg.setAttributeNS(null, 'fill', 'none');
  svg.setAttribute(
    'style',
    `${
      imageColor
        ? `background:${imageColor?.bgColor}`
        : 'background-image: linear-gradient(180deg, #112634 0%, #000000 100%)'
    };
		background-repeat:no-repeat !important;
		display: flex;
		align-items:center;`
  );
  if (initials) {
    let y_margin = '50%';
    //In firefox, the margin issue is coming, to solve that
    if (isBrowser() && fnBrowserDetect() === 'firefox') {
      y_margin = '55%';
    }
    svg.innerHTML = `
			<text x="50%" y=${y_margin} fill="${
        imageColor?.textColor ?? 'white'
      }" style="font-weight: 700; text-transform: uppercase; font-family: 'Roboto', sans-serif;"
			dominant-baseline="middle"  text-anchor="middle" alignment-baseline="central" font-size="90">
				${initials}
			</text>
		`;
  } else {
    svg.innerHTML = logo_img;
  }
  return svg;
};

/**
 * Function to extract initials from a name.
 * @param {string} name - The name from which initials will be extracted.
 * @returns {string} - The extracted initials in uppercase, or an empty string if the input name contains non-alphanumeric characters.
 */
export const getInitials = (_name) => {
  let initials;
  //Check if the name is in english
  const english = /^[A-Za-z0-9 ]*$/;
  //Replace the non alphanumeric characters in the name
  _name = _name ? _name.replace(/[^a-zA-Z0-9 ]/g, '') : '';
  if (english.test(_name)) {
    let name = _name.trim().toUpperCase();
    let lname = name.split(' ');
    lname = lname.map((a) => a.trim());
    initials =
      lname[0].charAt(0) + '' + (lname.length > 1 ? lname[lname.length - 1].charAt(0) : '');
    initials = String(initials).toUpperCase();
  }
  return initials;
};

/**
 * Function to create an SVG image element with initials based on a given name.
 * @param {string} name - The name from which initials will be extracted to generate the SVG image.
 * @param {string?} bgColor - The color of the background of the image. If null, default black color will be used
 * @returns {SVGElement} - The SVG image element with provided initials or the custom logo if no initials are provided.
 */
export const getInitialsSvg = (_name, bgColor = null) => {
  const initials = getInitials(_name);
  if (initials) return get_svg(initials, bgColor);
  return get_svg();
};

/**
 * Component to create and return an SVG image based on provided initials or a default logo.
 * @param {string} name - The name from which initials will be extracted to generate the image.
 * @param {string?} bgColor - The color of the background of the image. If null, default black color will be used
 * @returns {string} - The base64-encoded SVG image data or an empty string if no name is provided or it's not a browser environment.
 */
export const createImg = (name, bgColor = null) => {
  try {
    // Check if we're in a browser environment and have required APIs
    if (typeof window === 'undefined' || !window.btoa || !window.XMLSerializer) {
      console.warn('createImg requires browser environment with btoa and XMLSerializer support');
      return '';
    }

    // Check if a name is provided and the code is running in a browser environment.
    if (name && isBrowser()) {
      // Generate an SVG image element with initials based on the provided name.
      let initials_img = getInitialsSvg(name, bgColor);
      // Serialize the SVG element to a string.
      var s = new XMLSerializer().serializeToString(initials_img);
      // Encode the SVG string to base64.
      var encodedData = window.btoa(s);
      // Return the base64-encoded SVG image data.
      return 'data:image/svg+xml;base64,' + encodedData;
    }
  } catch (error) {
    console.warn('Error creating image:', error);
  }
  // Return an empty string if no name is provided or it's not a browser environment.
  return '';
};
