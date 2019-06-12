import React from "react"
import { render, cleanup } from 'react-testing-library'

import Instagallery from '../instagallery'

afterEach(cleanup)

describe(`Instagram`, () => {
  it(`renders children`, () => {
      const data = {
        allInstaNode: {
            edges: [{
                node: {
                    id: `ByIp7HailgF`,
                    likes: `37`,
                    comments: `1`,
                    original: `https://scontent-arn2-1.cdninstagram.com/vp/30639a1729778fe8e50ef52aa6df7336/5D90FBE1/t51.2885-15/e35/p1080x1080/61710348_646234902514820_6269958526009607282_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com`,
                    timestamp: `1559323573`,
                    caption: `Lorem ipsum`,
                    localFile: {
                        childImageSharp: {
                            fixed: {
                                src: `pretend-i-am-a-base64-encoded-image`,
                            },
                        },
                    },
                },
                node: {
                    id: `ByIJh2Ei0y8`,
                    likes: `14`,
                    comments: `2`,
                    original: `https://scontent-arn2-1.cdninstagram.com/vp/a7d6c555b3e4c62bc6607c30746ab39f/5D82F6E6/t51.2885-15/e35/s1080x1080/60393686_380301505918557_4231296823818284710_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com`,
                    timestamp: `1559306588`,
                    caption: `Dolor sit amet`,
                    localFile: {
                        childImageSharp: {
                            fixed: {
                                src: `pretend-i-am-a-base64-encoded-image`,
                            },
                        },
                    },
                },
            }],
        },
      }
    const tree = render(<Instagallery posts={data.allInstaNode} />)
    expect(tree).toMatchSnapshot();
  })
})
