/**
 * Config
 */
const SIZE = {
  w: 1920,
  h: 1920
}
const NUM = 10
const PADDING = 4

export class Art {
  private p: any

  constructor() {}

  async create() {
    // @ts-ignore
    const P5 = p5

    new P5((p: any) => {
      this.initArt(p)
    })
  }

  initArt(p: any) {
    this.p = p

    p.setup = () => {
      p.createCanvas(SIZE.w, SIZE.h)
      p.background(`#ffffff`);

      const eachSize = {
        w: SIZE.w / NUM,
        h: SIZE.h / NUM
      }
      for (let x = 0; x < NUM; x++) {
        for (let y = 0; y < NUM; y++) {
          const id = x * NUM + y
          p.loadImage(`assets/${id}.png`, img => {
            p.image(
              img,
              x * eachSize.w + PADDING,
              y * eachSize.h + PADDING,
              eachSize.w - PADDING * 2,
              eachSize.h - PADDING * 2
            );
          })
        }
      }

      p.noLoop()
    }
    p.draw = () => {
      // no-op
    }
  }
}

const artOBJ = new Art();
artOBJ.create()